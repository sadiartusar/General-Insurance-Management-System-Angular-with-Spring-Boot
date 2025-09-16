import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { ReceiptModel } from '../model/receipt.model';
import { environment } from '../environment/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

 private baseUrl = environment.apiBaseUrl+'/firemoneyreciept';

  constructor( private http: HttpClient,
      @Inject(PLATFORM_ID) private platformId: Object) { }

  getAllReciept():Observable<ReceiptModel[]>{
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<ReceiptModel[]>(this.baseUrl, { headers });
  }

  getReciptById(id:number):Observable<ReceiptModel>{
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<ReceiptModel>(this.baseUrl+"/"+id, { headers });
  }

  // creatRecipt(receipt:ReceiptModel): Observable<ReceiptModel>{
  //   return this.http.post<ReceiptModel>(this.baseUrl, receipt);
  // }

  createRecipt(receipt: ReceiptModel, billId: number): Observable<ReceiptModel> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.post<ReceiptModel>(`${this.baseUrl}/add?billId=${billId}`, receipt, { headers });
  }

  deleteRecipt(id:number):Observable<any>{
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
return this.http.delete(this.baseUrl+"/"+id,{ headers });
  }

   updateMoneyReceipt(id: number, moneyreciept: ReceiptModel): Observable<any> {
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
  searchByPolicyHolderAndBankNameAndId(receipts: ReceiptModel[], searchTerm: string): ReceiptModel[] {
    
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return receipts.filter(item =>
    (
      item.issuingOffice?.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.fireBill?.firePolicy.policyholder?.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.fireBill?.firePolicy.bankName?.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.fireBill?.firePolicy.id?.toString().includes(lowerCaseSearchTerm))
    );
  }
}
