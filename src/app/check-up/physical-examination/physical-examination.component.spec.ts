import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalExaminationComponent } from './physical-examination.component';

describe('PhysicalExaminationComponent', () => {
  let component: PhysicalExaminationComponent;
  let fixture: ComponentFixture<PhysicalExaminationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhysicalExaminationComponent],
    });
    fixture = TestBed.createComponent(PhysicalExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
