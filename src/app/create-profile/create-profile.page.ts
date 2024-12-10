import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController, NavController } from '@ionic/angular';
import { ServicioService } from '../servicio.service';
import { RouterLinkWithHref } from '@angular/router';

interface Profile {
  id?: number;
  nombre: string;
  codigo: string;
  password?: string;
  rol_id: number;
  estado: boolean;
}

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLinkWithHref, CommonModule, FormsModule]
})
export class CreateProfilePage implements OnInit {
  profile: Profile = {
    nombre: '',
    codigo: '',
    password: '',
    rol_id: 2, // Rol por defecto: Usuario
    estado: true
  };

  profiles: Profile[] = [];
  selectedProfile: Profile | null = null;
  isModalOpen = false;

  constructor(
    private toastController: ToastController,
    private servicio: ServicioService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getUsuarios();
  }

  async getUsuarios() {
    try {
      this.profiles = await this.servicio.getUsuarios().toPromise();
    } catch (error) {
      const toast = await this.toastController.create({
        message: 'Error al obtener usuarios.',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }

  async createProfile() {
    // Asegurarse de que solo hay un admin
    if (this.profile.rol_id === 1) {
      const adminExists = this.profiles.some(profile => profile.rol_id === 1);
      if (adminExists) {
        const toast = await this.toastController.create({
          message: 'Solo puede haber un admin.',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
        return;
      }
    }

    try {
      // Crear el perfil en la base de datos
      const response = await this.servicio.createUsuario(this.profile).toPromise();
      const newProfile = { ...this.profile, id: response.id };

      // Agregar el nuevo perfil a la lista de perfiles
      this.profiles.push(newProfile);

      // Limpiar el formulario
      this.profile = {
        nombre: '',
        codigo: '',
        password: '',
        rol_id: 2, // Rol por defecto: Usuario
        estado: true
      };

      const toast = await this.toastController.create({
        message: 'Perfil creado con éxito.',
        duration: 2000,
        color: 'success'
      });
      toast.present();

      // Navegar a la página de inicio
      this.navCtrl.navigateForward('/inicio');
    } catch (error) {
      const toast = await this.toastController.create({
        message: 'Error al crear el perfil.',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }

  showDetails(profile: Profile) {
    this.selectedProfile = profile;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  async toggleUserStatus(profile: Profile) {
    profile.estado = !profile.estado;
    try {
      await this.servicio.updateUsuario(profile).toPromise();
      const toast = await this.toastController.create({
        message: `Usuario ${profile.estado ? 'activado' : 'desactivado'} con éxito.`,
        duration: 2000,
        color: 'success'
      });
      toast.present();
    } catch (error) {
      const toast = await this.toastController.create({
        message: `Error al ${profile.estado ? 'activar' : 'desactivar'} el usuario.`,
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }
}
