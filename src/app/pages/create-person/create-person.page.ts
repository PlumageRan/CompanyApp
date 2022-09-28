import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.page.html',
  styleUrls: ['./create-person.page.scss'],
})
export class CreatePersonPage implements OnInit {

  data: Person

  constructor(
    public personService: PersonService,
    public router: Router
  ) {
    this.data = new Person();
  }

  ngOnInit() {
  }

  submitForm() {
    this.personService.createNewPerson(this.data).subscribe((response) => {
      console.log(this.data);
      this.router.navigate(['companies']);
    });
  }

}
