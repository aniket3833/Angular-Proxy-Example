import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getBaseURL() {
    return "https://online.reliancemf.com";
  }

  validatePAN(): Observable<String> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    var parameters = new HttpParams().set("data",'{"PAN":"BAJPP6048M"}').set("action","CheckInvestorPAN");
    return this.http.get<String>('/rmf/mowblyserver/investeasy/rmf/prod/wsapi?action=CheckInvestorPAN&data={"PAN":"BAJPP6048M"}',{headers:new HttpHeaders({'Content-Type': 'application/json'})});
  }
}
