import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController, AlertController } from '@ionic/angular';
import { ServicioService } from '../servicio.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLinkWithHref, CommonModule, FormsModule]
})
export class LoginPage {
  codigo: string = '';
  password: string = '';
  showAlert: boolean = false;

  constructor(
    private servicio: ServicioService,
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Acceso Denegado',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  onSubmit() {
    const credentials = {
      codigo: this.codigo,
      password: this.password
    };

    this.servicio.loginUsuario(credentials).subscribe(
      (response: any) => {
        console.log('Login successful', response);
        localStorage.setItem('auth_token', response.access_token);
        this.servicio.getUserInfo().subscribe(
          async (userInfo: any) => {
            if (userInfo.estado === 0) {
              await this.presentAlert('Tu cuenta está desactivada. Por favor, contacta al administrador.');
              localStorage.removeItem('auth_token');
              return;
            }
            localStorage.setItem('user_role', userInfo.rol_id);
            localStorage.setItem('user_code', userInfo.codigo);  // Guarda el código del usuario
            this.navCtrl.navigateForward('/inicio');
          }
        );
      },
      (error: any) => {
        console.error('Login failed', error);
        this.presentAlert('Credenciales inválidas. Por favor, inténtalo de nuevo.');
      }
    );
  }
}
