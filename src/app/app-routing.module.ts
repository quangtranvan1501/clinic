import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineWarehouseComponent } from './medicine-warehouse/medicine-warehouse.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientsComponent } from './patients/patients.component';
import { MedicalOfficeComponent } from './medical-office/medical-office.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'medicine-warehouse', component: MedicineWarehouseComponent },
  { path: 'patient-list', component: PatientListComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'medical-office', component: MedicalOfficeComponent },
  { path: 'setting', component: SettingComponent },
  {
    path: 'medical-apppointment',
    loadChildren: () =>
      import('./medical-appointment/medical-appointment-routing.module').then(
        (m) => m.MedicalAppointmentRoutingModule,
      ),
  },
  {
    path: 'check-up',
    loadChildren: () =>
      import('./check-up/check-up-routing.module').then(
        (m) => m.CheckUpRoutingModule,
      ),
  },

  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
