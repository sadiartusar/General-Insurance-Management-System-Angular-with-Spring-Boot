import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { CarReceiptModel } from '../model/carreceipt.model';
import { environment } from '../environment/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CarreceiptService {

   private baseUrl = environment.apiBaseUrl+'/carmoneyreciept';

  constructor(private http: HttpClient,
      @Inject(PLATFORM_ID) private platformId: Object) { }

  getAllCarReciept():Observable<CarReceiptModel[]>{
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
      return this.http.get<CarReceiptModel[]>(this.baseUrl, { headers });
    }
  
    getCarReciptById(id:number):Observable<CarReceiptModel>{
      let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
      return this.http.get<CarReceiptModel>(this.baseUrl+"/"+id, { headers });
    }
  
    // creatCarRecipt(carReceipt:CarReceiptModel): Observable<CarReceiptModel>{
    //   return this.http.post<CarReceiptModel>(this.baseUrl, carReceipt);
    // }

    creatCarRecipt(carReceipt: CarReceiptModel, carBillId: number): Observable<CarReceiptModel> {
      let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
        return this.http.post<CarReceiptModel>(`${this.baseUrl}/add?carBillId=${carBillId}`, carReceipt, { headers });
      }
  
    deleteCarRecipt(id:number):Observable<any>{
      let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
  return this.http.delete(this.baseUrl+"/"+id,{ headers });
    }
  
     updateMoneyReceipt(id: number, moneyreciept: CarReceiptModel): Observable<any> {
      let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
      return this.http.put(this.baseUrl + "update/" + id, moneyreciept, { headers });
    }
  
    // Filter receipts by policyholder, bankName, or id on the client side
    searchByPolicyHolderAndBankNameAndId(receipts: CarReceiptModel[], searchTerm: string): CarReceiptModel[] {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
  
      return receipts.filter(item =>
      (
        item.issuingOffice?.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.carBill?.carPolicy.policyholder?.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.carBill?.carPolicy.bankName?.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.carBill?.carPolicy.id?.toString().includes(lowerCaseSearchTerm))
      );
    }
}
