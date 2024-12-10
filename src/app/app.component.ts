import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  createOutline, createSharp, trashOutline,
  trashSharp, personOutline, personSharp,
  settingsOutline, settingsSharp, mailOutline,
  mailSharp, paperPlaneOutline, paperPlaneSharp,
  heartOutline, heartSharp, archiveOutline,
  archiveSharp, warningOutline, warningSharp,
  bookmarkOutline, bookmarkSharp, eyeOutline,
  closeOutline, checkmarkOutline
} from 'ionicons/icons';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    SidebarComponent // Asegúrate de que SidebarComponent es un componente válido
  ]
})
export class AppComponent {
  constructor() {
    addIcons({
      createOutline, createSharp, trashOutline,
      trashSharp, personOutline, personSharp,
      settingsOutline, settingsSharp, mailOutline,
      mailSharp, paperPlaneOutline, paperPlaneSharp,
      heartOutline, heartSharp, archiveOutline,
      archiveSharp, warningOutline, warningSharp,
      bookmarkOutline, bookmarkSharp, eyeOutline,
      closeOutline, checkmarkOutline
    });
  }
}
