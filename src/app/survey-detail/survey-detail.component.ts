import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class SurveyDetailComponent {
  @Input() survey: any;

  constructor(private modalController: ModalController) {}

  close() {
    this.modalController.dismiss();
  }
}
