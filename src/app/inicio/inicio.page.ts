import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLinkWithHref, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {
  userRole: number = 0; // Inicializar con un valor predeterminado

  ngOnInit() {
    const role = localStorage.getItem('user_role');
    if (role) {
      this.userRole = parseInt(role, 10);
    }
  }
}
