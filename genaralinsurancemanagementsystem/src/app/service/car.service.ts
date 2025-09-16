import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CarModel } from '../model/car.model';
import { environment } from '../environment/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CarService {

 private baseUrl = environment.apiBaseUrl+'/carpolicy';

  constructor(private http: HttpClient,
      @Inject(PLATFORM_ID) private platformId: Object) { }


// View all carpolicy
  viewAllCarPolicy(): Observable<any> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get(this.baseUrl, { headers })
      .pipe(
        catchError(this.handleError) // Handle error globally
      );
  }

  // View all carpolicy with typing
  viewAllCarPolicyForBill(): Observable<CarModel[]> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<CarModel[]>(this.baseUrl, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Create a new policy
  createCarPolicy(car: CarModel): Observable<any> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.post(this.baseUrl+"/add", car, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Delete a Car policy by ID
  deleteCarPolicy(id: number): Observable<any> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.delete(`${this.baseUrl}/${id}`, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Update a Car policy by ID
  updateCarPolicy(id: number, car: CarModel): Observable<any> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.put(`${this.baseUrl}/${id}`, car, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Get a policy by ID
  getByCarPolicyId(id: number): Observable<any> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get(`${this.baseUrl}/${id}`, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  

  // Get all policies
  getAllCarPolicy(): Observable<CarModel[]> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<CarModel[]>(this.baseUrl, { headers });
  }

  // Error handling
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }

  getLastBillNo(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/last-bill-no`);
  }

    // Search Car policies by policyholder
    policyholder(query: string): Observable<CarModel[]> {
      const searchUrl = `${this.baseUrl}?policyholder_like=${query}`;
      return this.http.get<CarModel[]>(searchUrl)
        .pipe(
          catchError(this.handleError)
        );
    }
  }