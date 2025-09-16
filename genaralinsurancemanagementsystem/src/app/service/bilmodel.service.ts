import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { BillModel } from '../model/bill.model';
import { environment } from '../environment/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BilmodelService {

  private baseUrl = environment.apiBaseUrl+'/firebill';

  constructor( private http: HttpClient,
      @Inject(PLATFORM_ID) private platformId: Object) { }

   viewAllBill(): Observable<any> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get(this.baseUrl, { headers });
  }

  getAllBillForReciept(): Observable<BillModel[]> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<BillModel[]>(this.baseUrl, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  


createBill(bill: BillModel, policyId: number): Observable<BillModel> {
   let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
  return this.http.post<BillModel>(`${this.baseUrl}/add?policyId=${policyId}`, bill, { headers });
}

  

  //  // Delete a bill by ID
  // deleteBill(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  deleteBill(id:number):Observable<any>{
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
return this.http.delete(this.baseUrl+"/"+id,{ headers });
  }

  
  updateBill(id: number, bill:BillModel): Observable<any> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.put(this.baseUrl +"/"+id, bill, { headers });
  }

  getByBillId(id: number): Observable<BillModel> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<BillModel>(this.baseUrl+"/"+ id, { headers });
  }
  getBillNoById(id: number): Observable<BillModel> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<BillModel>(this.baseUrl+"/"+ id, { headers });
  }

  



  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('An error occurred while processing the request.'));
  }


}
