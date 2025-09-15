import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReceiptModel } from '../model/receipt.model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

 private baseUrl = environment.apiBaseUrl+'/firemoneyreciept';

  constructor(private http: HttpClient) { }

  getAllReciept():Observable<ReceiptModel[]>{
    return this.http.get<ReceiptModel[]>(this.baseUrl);
  }

  getReciptById(id:number):Observable<ReceiptModel>{
    return this.http.get<ReceiptModel>(this.baseUrl+"/"+id);
  }

  // creatRecipt(receipt:ReceiptModel): Observable<ReceiptModel>{
  //   return this.http.post<ReceiptModel>(this.baseUrl, receipt);
  // }

  createRecipt(receipt: ReceiptModel, billId: number): Observable<ReceiptModel> {
    return this.http.post<ReceiptModel>(`${this.baseUrl}/add?billId=${billId}`, receipt);
  }

  deleteRecipt(id:number):Observable<any>{
return this.http.delete(this.baseUrl+"/"+id);
  }

   updateMoneyReceipt(id: number, moneyreciept: ReceiptModel): Observable<any> {
    return this.http.put(this.baseUrl + "update/" + id, moneyreciept);
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
