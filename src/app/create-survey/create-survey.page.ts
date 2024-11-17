import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.page.html',
  styleUrls: ['./create-survey.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLinkWithHref, CommonModule, FormsModule]
})
export class CreateSurveyPage {

  constructor() { }

}
