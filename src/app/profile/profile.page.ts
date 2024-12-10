import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLinkWithHref, CommonModule, FormsModule]
})
export class ProfilePage implements OnInit {
  user: any;

  constructor(private servicio: ServicioService) {}

  ngOnInit() {
    const userCode = localStorage.getItem('user_code');  // Obtiene el código del usuario
    if (userCode) {
      this.servicio.getUserInfo().subscribe(
        data => {
          this.user = data;  // Asigna la información del usuario logueado
        },
        error => {
          console.error('Error al obtener la información del usuario:', error);
        }
      );
    }
  }
}
