import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HealthInsurancePolicy } from '../model/health.model';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

 private baseUrl:string= "http://localhost:3000/healthinsurancepolicy";

 constructor(private http: HttpClient) {}

  getAllPolicy(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  savePolicy(policy: HealthInsurancePolicy): Observable<any> {

    return this.http.post(this.baseUrl, policy);

  }

  deletePolicy(policyId: string): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + policyId);
  }

  getPolicyById(policyId: string): Observable<any> {
    return this.http.get(this.baseUrl + "/" + policyId);
  }

  updatePolicy(policyId: string, policy: HealthInsurancePolicy): Observable<any>{

    return this.http.put(this.baseUrl +"/"+ policyId, policy);
  }
}
