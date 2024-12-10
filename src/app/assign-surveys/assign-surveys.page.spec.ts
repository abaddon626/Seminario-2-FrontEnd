import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssignSurveysPage } from './assign-surveys.page';

describe('AssignSurveysPage', () => {
  let component: AssignSurveysPage;
  let fixture: ComponentFixture<AssignSurveysPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignSurveysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
