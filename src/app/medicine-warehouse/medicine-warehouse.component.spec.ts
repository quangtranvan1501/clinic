import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineWarehouseComponent } from './medicine-warehouse.component';

describe('MedicineWarehouseComponent', () => {
  let component: MedicineWarehouseComponent;
  let fixture: ComponentFixture<MedicineWarehouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicineWarehouseComponent],
    });
    fixture = TestBed.createComponent(MedicineWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
