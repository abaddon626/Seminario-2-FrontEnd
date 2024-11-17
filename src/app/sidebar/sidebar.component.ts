import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLinkWithHref], // Importa el módulo de Ionic aquí
})
export class SidebarComponent {
  constructor() {}
}
