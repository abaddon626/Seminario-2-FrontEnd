import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-llenar-encuestas',
  templateUrl: './llenar-encuestas.page.html',
  styleUrls: ['./llenar-encuestas.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LlenarEncuestasPage implements OnInit {
  instituciones: any[] = [];
  cursos: any[] = [];
  filteredCursos: any[] = [];
  encuestas: any[] = [];
  selectedInstitucion: string = '';
  selectedCurso: string = '';
  encuestaSeleccionada: any;
  mostrarFormularioBusqueda: boolean = true;
  respuesta: any = {};

  constructor(private servicio: ServicioService) {}

  ngOnInit() {
    this.servicio.getInstituciones().subscribe(data => {
      this.instituciones = data;
      this.cursos = data.flatMap((institucion: any) => institucion.cursos);
    });
  }

  filterCursos() {
    if (this.selectedInstitucion) {
      this.filteredCursos = this.cursos.filter(curso => curso.institucion_id === this.selectedInstitucion);
    } else {
      this.filteredCursos = [];
    }
  }

  buscarEncuestas() {
    if (this.selectedCurso) {
      this.servicio.getEncuestasPorCurso(parseInt(this.selectedCurso, 10)).subscribe(data => {
        this.encuestas = data;
        this.encuestaSeleccionada = this.encuestas.length > 0 ? this.encuestas[0] : null;
        if (this.encuestaSeleccionada && this.encuestaSeleccionada.questions) {
          // Inicializar las respuestas
          this.encuestaSeleccionada.questions.forEach((question: any) => {
            this.respuesta[question.question] = '';
          });
        }
        this.mostrarFormularioBusqueda = false; // Ocultar formulario de búsqueda
      });
    }
  }

  guardarRespuesta() {
    if (this.encuestaSeleccionada) {
      this.servicio.guardarRespuesta(this.encuestaSeleccionada.id, this.respuesta).subscribe(() => {
        // Puedes agregar alguna acción después de guardar la respuesta, como mostrar un mensaje de éxito
        this.mostrarFormularioBusqueda = true; // Mostrar formulario de búsqueda de nuevo
        this.encuestaSeleccionada = null; // Limpiar la encuesta seleccionada
      });
    }
  }
}
