import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PolicyModel } from '../model/policy';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PolicymodelService {

   private baseUrl = environment.apiBaseUrl+'/firepolicy';

  constructor(private http: HttpClient) { }

  // View all policies
  viewAllPolicy(): Observable<any> {
    return this.http.get(this.baseUrl)
      .pipe(
        catchError(this.handleError) // Handle error globally
      );
  }

  // View all policies with typing
  viewAllPolicyForBill(): Observable<PolicyModel[]> {
    return this.http.get<PolicyModel[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Create a new policy
  createPolicy(policy: PolicyModel): Observable<any> {
    return this.http.post(this.baseUrl+"/add", policy)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Delete a policy by ID
  deletePolicy(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Update a policy by ID
  updatePolicy(id: number, policy: PolicyModel): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, policy)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Get a policy by ID
  getByPolicyId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  

  // Get all policies
  getAllPolicies(): Observable<PolicyModel[]> {
    return this.http.get<PolicyModel[]>(this.baseUrl);
  }

  // Error handling
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }

  getLastBillNo(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/last-bill-no`);
  }

    // Search policies by policyholder
    policyholder(query: string): Observable<PolicyModel[]> {
      const searchUrl = `${this.baseUrl}?policyholder_like=${query}`;
      return this.http.get<PolicyModel[]>(searchUrl)
        .pipe(
          catchError(this.handleError)
        );
    }
}
