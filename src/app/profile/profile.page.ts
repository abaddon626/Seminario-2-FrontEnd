import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLinkWithHref, CommonModule, FormsModule]
})
export class ProfilePage {
  user = {
    name: 'Alejandro Fernández',
    email: 'alejandro.fernandez@example.com',
    phone: '+57 312 345 6789'
  };

  constructor() {}
}
