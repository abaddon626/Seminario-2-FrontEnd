import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar solo FormsModule
import { IonicModule, ToastController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-assign-surveys',
  templateUrl: './assign-surveys.page.html',
  styleUrls: ['./assign-surveys.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink] // Incluir solo FormsModule aquí
})
export class AssignSurveysPage implements OnInit {
  surveys: any[] = [];
  instituciones: any[] = [];
  cursos: any[] = [];
  filteredCursos: any[] = [];
  selectedSurvey: string = '';
  selectedInstitucion: string = '';
  selectedCurso: string = '';

  constructor(
    private servicio: ServicioService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.servicio.getEncuestas().subscribe(data => {
      this.surveys = data.map((survey: any) => {
        return {
          id: survey.id,
          title: JSON.parse(survey.estructura).title
        };
      });
    });

    this.servicio.getInstituciones().subscribe(data => {
      this.instituciones = data;
    });

    this.servicio.getCursos().subscribe(data => {
      this.cursos = data;
    });
  }

  filterCursosByInstitucion() {
    this.filteredCursos = this.cursos.filter(curso => curso.institucion_id === parseInt(this.selectedInstitucion, 10));
  }

  saveData() {
    const selectedSurvey = this.surveys.find(survey => survey.id === this.selectedSurvey);
    if (this.selectedSurvey && this.selectedCurso) {
      const enlace = selectedSurvey.title;
      this.servicio.saveData(enlace, parseInt(this.selectedSurvey, 10), parseInt(this.selectedCurso, 10)).subscribe(
        response => {
          this.presentToast('Datos guardados exitosamente.');
        },
        error => {
          this.presentToast('Error al guardar los datos.');
        }
      );
    } else {
      this.presentToast('Por favor, seleccione una encuesta y un curso.');
    }
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
