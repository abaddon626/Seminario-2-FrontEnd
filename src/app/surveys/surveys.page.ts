import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';
import { Survey } from './survey.interface';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.page.html',
  styleUrls: ['./surveys.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLinkWithHref, CommonModule, FormsModule]
})

export class SurveysPage {
  surveys: Survey[] = [
    { id: 1, title: 'Encuesta A', description: 'Creado por usuario A' },
    { id: 2, title: 'Encuesta 1', description: 'Creado por usuario ##' },
    { id: 3, title: 'Encuesta Jhon', description: 'Creado por usuario 0' }
  ];

  constructor(private toastController: ToastController) {}

  createSurvey(survey: Survey) {
    this.presentToast('Aqui emerge el componente de crear encuesta ');
  }

  editSurvey(survey: Survey) {
    this.presentToast('Editando ' + survey.title);
  }

  deleteSurvey(survey: Survey) {
    this.surveys = this.surveys.filter(s => s.id !== survey.id);
    this.presentToast('Encuesta ' + survey.title + ' eliminada');
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
