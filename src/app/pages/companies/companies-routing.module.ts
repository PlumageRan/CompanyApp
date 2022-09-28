import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCompanyPage } from '../create-company/create-company.page';

import { CompaniesPage } from './companies.page';

const routes: Routes = [
  {
    path: '',
    component: CompaniesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(
    [
      {path: '', component: CompaniesPage},
      {path: 'create', component: CreateCompanyPage}
    ]
  )],
  exports: [RouterModule],
})
export class CompaniesPageRoutingModule {}
