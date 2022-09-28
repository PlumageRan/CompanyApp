import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateCompanyPage } from './pages/create-company/create-company.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'companies',
    pathMatch: 'full'
  },
  {
    path: 'companies',
    loadChildren: () => import('./pages/companies/companies.module').then( m => m.CompaniesPageModule)
  },
  {
    path: 'companies/:id',
    loadChildren: () => import('./pages/company-details/company-details.module').then( m => m.CompanyDetailsPageModule)
  },
  {
    path: 'companies/create',
    loadChildren: () => import('./pages/create-company/create-company.module').then( m => m.CreateCompanyPageModule)
  },
  {
    path: 'people/create',
    loadChildren: () => import('./pages/create-person/create-person.module').then( m => m.CreatePersonPageModule)
  },
  {
    path: 'people/:id',
    loadChildren: () => import('./pages/person-details/person-details.module').then( m => m.PersonDetailsPageModule)
  },
  {
    path: 'companies/:id/people',
    loadChildren: () => import('./pages/company-staff/company-staff.module').then( m => m.CompanyStaffPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
