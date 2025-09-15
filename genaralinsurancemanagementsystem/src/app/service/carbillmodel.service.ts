import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CarBillModel } from '../model/carbil.model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CarbillmodelService {

 private baseUrl = environment.apiBaseUrl+'/carbill';

  constructor(private http: HttpClient) { }

  viewAllCarBill(): Observable<any> {
      return this.http.get(this.baseUrl);
    }
  
    getAllCarBillForReciept(): Observable<CarBillModel[]> {
      return this.http.get<CarBillModel[]>(this.baseUrl)
        .pipe(
          catchError(this.handleError)
        );
    }
  
    // createCarBill(carBills: CarBillModel): Observable<CarBillModel> {
    //   return this.http.post<CarBillModel>(this.baseUrl, carBills);
    // }

    createCarBill(carBills: CarBillModel, carPolicyId: number): Observable<CarBillModel> {
  return this.http.post<CarBillModel>(`${this.baseUrl}/add?carPolicyId=${carPolicyId}`, carBills);
}
  
    deleteCarBill(id: number): Observable<any> {
      return this.http.delete(this.baseUrl+"/"+ id);
    }
  
    // updateBill(bill: BillModel): Observable<BillModel> {
    //   return this.http.put<BillModel>(this.baseUrl + bill.id, bill);
    // }
    updateCarBill(id: number, carBill:CarBillModel): Observable<any> {
      return this.http.put(this.baseUrl +"/"+id, carBill);
    }
  
    getByCarBillId(id: number): Observable<CarBillModel> {
      return this.http.get<CarBillModel>(this.baseUrl+"/"+ id);
    }
  
    
  
  
  
    private handleError(error: any) {
      console.error('An error occurred:', error);
      return throwError(() => new Error('An error occurred while processing the request.'));
    }
}
