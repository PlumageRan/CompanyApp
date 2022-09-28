import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyStaffPage } from './company-staff.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyStaffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyStaffPageRoutingModule {}
