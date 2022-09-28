import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.page.html',
  styleUrls: ['./person-details.page.scss'],
})
export class PersonDetailsPage implements OnInit {

  person = null;

  constructor(private route: ActivatedRoute, private personService: PersonService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.personService.getPersonDetails(id).subscribe((res) => {
      console.log(res)
      this.person = res;
    })
  }

}
