import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionListComponent } from './reception-list.component';

describe('ReceptionListComponent', () => {
  let component: ReceptionListComponent;
  let fixture: ComponentFixture<ReceptionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceptionListComponent],
    });
    fixture = TestBed.createComponent(ReceptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
