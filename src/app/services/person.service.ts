import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getPersonDetails(id: string) {
    return this.http.get(`${environment.baseUrl}/person/${id}`);
  }

  createNewPerson(item: any) {
    return this.http.post(`${environment.baseUrl}/person`, JSON.stringify(item), this.httpOptions);
  }
}
