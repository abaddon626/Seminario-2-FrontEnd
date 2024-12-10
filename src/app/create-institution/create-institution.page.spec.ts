import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateInstitutionPage } from './create-institution.page';

describe('CreateInstitutionPage', () => {
  let component: CreateInstitutionPage;
  let fixture: ComponentFixture<CreateInstitutionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInstitutionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
