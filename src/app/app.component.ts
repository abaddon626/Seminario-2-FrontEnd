import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  createOutline, createSharp, trashOutline, 
  trashSharp, personOutline, personSharp, 
  settingsOutline, settingsSharp, mailOutline, 
  mailSharp, paperPlaneOutline, paperPlaneSharp, 
  heartOutline, heartSharp, archiveOutline, 
  archiveSharp, warningOutline, warningSharp, 
  bookmarkOutline, bookmarkSharp
} from 'ionicons/icons';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkWithHref, RouterLinkActive, CommonModule, IonicModule, SidebarComponent]
})
export class AppComponent {
/*  public appPages = [
    { title: 'Perfil', url: '/profile', icon: 'mail' },
    { title: 'Opciones', url: '/settings', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
*/
  constructor() {
    addIcons({
      createOutline, createSharp, trashOutline, 
      trashSharp, personOutline, personSharp, 
      settingsOutline, settingsSharp, mailOutline, 
      mailSharp, paperPlaneOutline, paperPlaneSharp, 
      heartOutline, heartSharp, archiveOutline, 
      archiveSharp, warningOutline, warningSharp, 
      bookmarkOutline, bookmarkSharp
    });
  }
}
