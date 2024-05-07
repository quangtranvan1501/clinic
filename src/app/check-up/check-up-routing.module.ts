import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CheckUpComponent } from './check-up.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { ServiceChooseComponent } from './service-choose/service-choose.component';
import { PhysicalExaminationComponent } from './physical-examination/physical-examination.component';

const routes: Routes = [
  { path: '', component: CheckUpComponent },
  { path: 'prescription', component: PrescriptionComponent },
  { path: 'service-choose', component: ServiceChooseComponent },
  { path: 'physical-examination', component: PhysicalExaminationComponent },
  // Thêm các route khác nếu cần
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckUpRoutingModule {}
