import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CarBillModel } from '../model/carbil.model';
import { environment } from '../environment/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CarbillmodelService {

 private baseUrl = environment.apiBaseUrl+'/carbill';

  constructor(private http: HttpClient,
      @Inject(PLATFORM_ID) private platformId: Object) { }

  viewAllCarBill(): Observable<any> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
      return this.http.get(this.baseUrl, { headers });
    }
  
    getAllCarBillForReciept(): Observable<CarBillModel[]> {
      let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
      return this.http.get<CarBillModel[]>(this.baseUrl, { headers })
        .pipe(
          catchError(this.handleError)
        );
    }
  
    // createCarBill(carBills: CarBillModel): Observable<CarBillModel> {
    //   return this.http.post<CarBillModel>(this.baseUrl, carBills);
    // }

    createCarBill(carBills: CarBillModel, carPolicyId: number): Observable<CarBillModel> {
      let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
  return this.http.post<CarBillModel>(`${this.baseUrl}/add?carPolicyId=${carPolicyId}`, carBills, { headers });
}
  
    deleteCarBill(id: number): Observable<any> {
      let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
      return this.http.delete(this.baseUrl+"/"+ id, { headers });
    }
  
    // updateBill(bill: BillModel): Observable<BillModel> {
    //   return this.http.put<BillModel>(this.baseUrl + bill.id, bill);
    // }
    updateCarBill(id: number, carBill:CarBillModel): Observable<any> {
      let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
      return this.http.put(this.baseUrl +"/"+id, carBill, { headers });
    }
  
    getByCarBillId(id: number): Observable<CarBillModel> {
      let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
      return this.http.get<CarBillModel>(this.baseUrl+"/"+ id, { headers });
    }
  
    
  
  
  
    private handleError(error: any) {
      console.error('An error occurred:', error);
      return throwError(() => new Error('An error occurred while processing the request.'));
    }
}
