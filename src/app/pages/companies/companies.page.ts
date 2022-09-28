import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { CompanyService } from 'src/app/services/company.service';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss'],
})
export class CompaniesPage implements OnInit {

  companies = [];

  constructor(private companyService: CompanyService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadComapnies();
  }

  async loadComapnies() {

    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.companyService.getAllCompanies().subscribe((res) => {
      loading.dismiss();
      this.companies.push(...res);
      console.log(this.companies);
    })
  }

}
