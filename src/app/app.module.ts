import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { MedicineWarehouseComponent } from './medicine-warehouse/medicine-warehouse.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientsComponent } from './patients/patients.component';
import { MedicalOfficeComponent } from './medical-office/medical-office.component';
import { SettingComponent } from './setting/setting.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { MedicalAppointmentComponent } from './medical-appointment/medical-appointment.component';
import { ListAppointmentComponent } from './medical-appointment/list-appointment/list-appointment.component';
import { ReceptionListComponent } from './medical-appointment/reception-list/reception-list.component';
import { CheckUpComponent } from './check-up/check-up.component';
import { PhysicalExaminationComponent } from './check-up/physical-examination/physical-examination.component';
import { ServiceChooseComponent } from './check-up/service-choose/service-choose.component';
import { PrescriptionComponent } from './check-up/prescription/prescription.component';
import { AuthService } from './model/auth.service';
import { IonicModule } from '@ionic/angular';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MedicineWarehouseComponent,
    PatientListComponent,
    PatientsComponent,
    MedicalOfficeComponent,
    SettingComponent,
    MedicalAppointmentComponent,
    ListAppointmentComponent,
    ReceptionListComponent,
    CheckUpComponent,
    PhysicalExaminationComponent,
    ServiceChooseComponent,
    PrescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    NzInputModule,
    NzCascaderModule,
    NzDropDownModule,
    NzBadgeModule,
    NzAvatarModule,
    NzSwitchModule,
    NzFormModule,
    NzDatePickerModule,
    IonicModule.forRoot({}),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/zapps/2740554777190756680' },
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
