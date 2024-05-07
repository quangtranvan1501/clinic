import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalOfficeComponent } from './medical-office.component';

describe('MedicalOfficeComponent', () => {
  let component: MedicalOfficeComponent;
  let fixture: ComponentFixture<MedicalOfficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalOfficeComponent],
    });
    fixture = TestBed.createComponent(MedicalOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
