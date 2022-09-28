import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  getAllCompanies(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/companies`);
  }

  getCompanyDetails(id: string) {
    return this.http.get(`${environment.baseUrl}/companies/${id}`);
  }

  getCompanyStaff(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/companies/${id}/people`)
  }

  createNewCompany(item: any) {
    return this.http.post(`${environment.baseUrl}/companies`, JSON.stringify(item), this.httpOptions);
  }
}
