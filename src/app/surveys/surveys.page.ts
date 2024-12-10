import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController, ModalController } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { SurveyDetailComponent } from '../survey-detail/survey-detail.component'; // Importar el componente del modal

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.page.html',
  styleUrls: ['./surveys.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLinkWithHref, CommonModule, FormsModule]
})
export class SurveysPage implements OnInit {
  surveys: any[] = [];
  userRole: number = 0; // Inicializar la propiedad

  constructor(
    private toastController: ToastController,
    private servicioService: ServicioService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    const userRoleStr = localStorage.getItem('user_role');
    if (userRoleStr !== null) {
      this.userRole = parseInt(userRoleStr, 10); // Asegurar que el valor no sea nulo antes de convertir
    }
    this.servicioService.getEncuestas().subscribe(data => {
      this.surveys = data.map((survey: any) => {
        return {
          ...survey,
          estructura: JSON.parse(survey.estructura)
        };
      });
    });
  }

  async showSurvey(survey: any) {
    const modal = await this.modalController.create({
      component: SurveyDetailComponent,
      componentProps: {
        survey
      }
    });
    return await modal.present();
  }

  deleteSurvey(survey: any) {
    this.servicioService.deleteEncuesta(survey.id).subscribe(() => {
      this.surveys = this.surveys.filter(s => s.id !== survey.id);
      this.presentToast(`Encuesta con ID ${survey.id} del usuario ${survey.usuario_id} eliminada`);
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
