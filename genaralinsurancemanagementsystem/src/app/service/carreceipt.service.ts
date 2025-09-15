import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarReceiptModel } from '../model/carreceipt.model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CarreceiptService {

   private baseUrl = environment.apiBaseUrl+'/carmoneyreciept';

  constructor(private http: HttpClient) { }

  getAllCarReciept():Observable<CarReceiptModel[]>{
      return this.http.get<CarReceiptModel[]>(this.baseUrl);
    }
  
    getCarReciptById(id:number):Observable<CarReceiptModel>{
      return this.http.get<CarReceiptModel>(this.baseUrl+"/"+id);
    }
  
    // creatCarRecipt(carReceipt:CarReceiptModel): Observable<CarReceiptModel>{
    //   return this.http.post<CarReceiptModel>(this.baseUrl, carReceipt);
    // }

    creatCarRecipt(carReceipt: CarReceiptModel, carBillId: number): Observable<CarReceiptModel> {
        return this.http.post<CarReceiptModel>(`${this.baseUrl}/add?carBillId=${carBillId}`, carReceipt);
      }
  
    deleteCarRecipt(id:number):Observable<any>{
  return this.http.delete(this.baseUrl+"/"+id);
    }
  
     updateMoneyReceipt(id: number, moneyreciept: CarReceiptModel): Observable<any> {
      return this.http.put(this.baseUrl + "update/" + id, moneyreciept);
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
