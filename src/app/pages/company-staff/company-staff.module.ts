import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyStaffPageRoutingModule } from './company-staff-routing.module';

import { CompanyStaffPage } from './company-staff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyStaffPageRoutingModule
  ],
  declarations: [CompanyStaffPage]
})
export class CompanyStaffPageModule {}
