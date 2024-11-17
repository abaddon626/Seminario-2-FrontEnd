import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateSurveyPage } from './create-survey.page';

describe('CreateSurveyPage', () => {
  let component: CreateSurveyPage;
  let fixture: ComponentFixture<CreateSurveyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
