import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { CompanyVoltAccount } from '../model/companyvolt.model';
import { Payment } from '../model/payment.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

   private baseUrl = environment.apiBaseUrl+'/payment';
  constructor(private http: HttpClient,
      @Inject(PLATFORM_ID) private platformId: Object) { }

  // Deposit money into user account
  deposit(id: number, amount: number): Observable<string> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    const params = new HttpParams().set('amount', amount.toString());
    return this.http.post(`${this.baseUrl}/deposit/${id}`, null, { params, responseType: 'text', headers });
  }

 // Pay to company volt account
pay(id: number, amount: number): Observable<string> {
  let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
  const params = new HttpParams().set('amount', amount.toString());
  return this.http.post(`${this.baseUrl}/pay/${id}`, null, { 
    params,
    responseType: 'text' ,headers // <-- Important fix
  });
}

// Transfer money between accounts (user-to-user OR user-to-volt)
payAmount(senderId: number, receiverId: number, amount: number): Observable<string> {
  let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
  const params = new HttpParams()
    .set('senderId', senderId.toString())
    .set('receiverId', receiverId.toString())
    .set('amount', amount.toString());

  return this.http.post(`${this.baseUrl}/pay`, null, { 
    params,
    responseType: 'text' ,headers// so we get string response from backend
  });
}



  // Get user account balance
getUserBalance(id: number): Observable<number> {
  let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
  return this.http.get<number>(`${this.baseUrl}/balance/${id}`, { headers });
}


  // // Get company balance
  // getCompanyBalance(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/company-balance/${id}`);
  // }
  // Get company balance
  getCompanyBalance(): Observable<any> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<any>(`${this.baseUrl}/company-balance`, { headers });
  }

     getAllCompanyDetails(): Observable<CompanyVoltAccount[]> {
      let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<CompanyVoltAccount[]>(`${this.baseUrl}/showcompanydetails`, { headers });
  }

   getAllPaymentDetails(): Observable<Payment[]> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<Payment[]>(`${this.baseUrl}/allpaymentdetails`, { headers });
}
}