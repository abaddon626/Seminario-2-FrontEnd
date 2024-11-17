import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';

interface Profile { 
  name: string; 
  password: string; 
  role: string;
}

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLinkWithHref, CommonModule, FormsModule]
})
export class CreateProfilePage {
  profile: Profile = {
    name: '',
    password: '',
    role: ''
  };

  profiles: Profile[] = [];

  constructor(private toastController: ToastController) {}

  async createProfile() {
    // Agregar el nuevo perfil a la lista de perfiles 
    this.profiles.push({ ...this.profile }); 
    
    // Limpiar el formulario 
    this.profile = { 
      name: '', 
      password: '', 
      role: '' 
    };

    const toast = await this.toastController.create({
      message: 'Perfil creado con éxito.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
