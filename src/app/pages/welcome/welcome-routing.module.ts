import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { MedicineWarehouseComponent } from 'src/app/medicine-warehouse/medicine-warehouse.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'medicine-warehouse', component: MedicineWarehouseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
