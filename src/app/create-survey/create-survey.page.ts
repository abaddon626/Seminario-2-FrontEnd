import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule, ToastController, NavController } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { ServicioService } from '../servicio.service';

interface Survey {
  title: string;
  description: string;
  questions: Question[];
}

interface Question {
  question: string;
  type: number;
  responses: string[];
}

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.page.html',
  styleUrls: ['./create-survey.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CreateSurveyPage {
  survey: Survey = {
    title: '',
    description: '',
    questions: [{ question: '', type: 1, responses: [''] }]
  };

  constructor(
    private servicioService: ServicioService,
    private toastController: ToastController,
    private navController: NavController
  ) {}

  addQuestion() {
    console.log('Adding a new question');  // Debugging line
    this.survey.questions.push({ question: '', type: 1, responses: [''] });
  }

  addResponse(index: number) {
    console.log(`Adding a new response to question ${index}`);  // Debugging line
    this.survey.questions[index].responses.push('');
  }

  removeQuestion(index: number) {
    console.log(`Removing question ${index}`);  // Debugging line
    this.survey.questions.splice(index, 1);
  }

  removeResponse(questionIndex: number, responseIndex: number) {
    console.log(`Removing response ${responseIndex} from question ${questionIndex}`);  // Debugging line
    this.survey.questions[questionIndex].responses.splice(responseIndex, 1);
  }

  async saveSurvey(form: NgForm) {
    if (form.valid) {
      const surveyData = {
        estructura: JSON.stringify(this.survey),
        usuario_id: 1 // Ajusta esto según el usuario actual
      };

      console.log('Sending survey data to the server:', surveyData);  // Debugging line

      this.servicioService.createEncuesta(surveyData).subscribe(async () => {
        const toast = await this.toastController.create({
          message: 'Encuesta creada exitosamente',
          duration: 2000,
          color: 'success'
        });
        toast.present();
        this.navController.navigateBack('/surveys');
      }, async (error) => {
        console.error('Error creating survey:', error);  // Debugging line
        const toast = await this.toastController.create({
          message: 'Error al crear encuesta: ' + error.message,
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      });
    } else {
      console.log('Form is invalid');  // Debugging line
    }
  }
}
