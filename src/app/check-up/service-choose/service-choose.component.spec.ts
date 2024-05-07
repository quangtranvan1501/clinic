import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChooseComponent } from './service-choose.component';

describe('ServiceChooseComponent', () => {
  let component: ServiceChooseComponent;
  let fixture: ComponentFixture<ServiceChooseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceChooseComponent],
    });
    fixture = TestBed.createComponent(ServiceChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
