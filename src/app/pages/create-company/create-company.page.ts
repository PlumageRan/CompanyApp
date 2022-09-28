import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company'

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.page.html',
  styleUrls: ['./create-company.page.scss'],
})
export class CreateCompanyPage implements OnInit {

  data: Company

  constructor(
    public companyService: CompanyService,
    public router: Router
  ) {
    this.data = new Company();
  }

  ngOnInit() {
  }

  submitForm() {
    this.companyService.createNewCompany(this.data).subscribe((response) => {
      console.log(this.data);
      this.router.navigate(['companies']);
    });
  }

}
