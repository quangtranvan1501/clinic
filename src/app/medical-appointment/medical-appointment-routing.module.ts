import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListAppointmentComponent } from './list-appointment/list-appointment.component';
import { MedicalAppointmentComponent } from './medical-appointment.component';
import { ReceptionListComponent } from './reception-list/reception-list.component';

const routes: Routes = [
  { path: '', component: MedicalAppointmentComponent },
  { path: 'list-apppointment', component: ListAppointmentComponent },
  { path: 'reception-list', component: ReceptionListComponent },
  // Thêm các route khác nếu cần
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalAppointmentRoutingModule {}
