import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-staff',
  templateUrl: './company-staff.page.html',
  styleUrls: ['./company-staff.page.scss'],
})
export class CompanyStaffPage implements OnInit {

  people = [];
  constructor(
    private route: ActivatedRoute, 
    private companyService: CompanyService, 
    private loadingCtrl: LoadingController,
    private router: Router,
    ) { }

  ngOnInit() {
    this.loadCompanyStaff();
  }

  async loadCompanyStaff() {

    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();
    const id = this.route.snapshot.paramMap.get('id');
    this.companyService.getCompanyStaff(id).subscribe((res) => {
      loading.dismiss();
      this.people.push(...res);
      console.log(this.people);
    })
  }

  goCreateEmployeePage() {
    this.router.navigate(['people/create']);
  }

}
