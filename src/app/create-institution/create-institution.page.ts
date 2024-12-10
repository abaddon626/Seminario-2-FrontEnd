import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-create-institution',
  templateUrl: './create-institution.page.html',
  styleUrls: ['./create-institution.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLinkWithHref, CommonModule, FormsModule]
})
export class CreateInstitutionPage implements OnInit {
  nombre: string = '';
  direccion: string = '';
  instituciones: any[] = [];
  userRole: number = 0;

  constructor(private servicio: ServicioService, private toastController: ToastController) {}

  ngOnInit() {
    const userRoleStr = localStorage.getItem('user_role');
    if (userRoleStr !== null) {
      this.userRole = parseInt(userRoleStr, 10);
    }
    this.getInstituciones();
  }

  async getInstituciones() {
    try {
      this.instituciones = await this.servicio.getInstituciones().toPromise();
    } catch (error) {
      const toast = await this.toastController.create({
        message: 'Error al obtener instituciones.',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }

  async onSubmit() {
    const institucion = {
      nombre: this.nombre,
      direccion: this.direccion
    };

    try {
      const response = await this.servicio.createInstitucion(institucion).toPromise();
      this.instituciones.push(response.institucion);

      this.nombre = '';
      this.direccion = '';

      const toast = await this.toastController.create({
        message: 'Institución creada con éxito.',
        duration: 2000,
        color: 'success'
      });
      toast.present();
    } catch (error) {
      const toast = await this.toastController.create({
        message: 'Error al crear la institución.',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }
}
