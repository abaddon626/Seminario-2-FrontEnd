import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LlenarEncuestasPage } from './llenar-encuestas.page';

describe('LlenarEncuestasPage', () => {
  let component: LlenarEncuestasPage;
  let fixture: ComponentFixture<LlenarEncuestasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LlenarEncuestasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
