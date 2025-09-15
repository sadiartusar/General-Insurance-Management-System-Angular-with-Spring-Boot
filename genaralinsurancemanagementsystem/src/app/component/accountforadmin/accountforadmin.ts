import { ChangeDetectorRef, Component } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from '../../service/payment.service';
import { Router } from '@angular/router';
import { Account } from '../../model/account.model';

@Component({
  selector: 'app-accountforadmin',
  standalone: false,
  templateUrl: './accountforadmin.html',
  styleUrl: './accountforadmin.css'
})
export class Accountforadmin {
accountId!:number
 id: number = 1; // Example user id
  amount: number = 0;
  userBalance: number = 0;
  companyBalance: number = 0;
  message: string = '';
  paymentForm!: FormGroup;
  // voltId:Number=1;

  constructor(private paymentService: PaymentService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
     this.paymentForm = this.formBuilder.group({
      senderId: ['', Validators.required],
      receiverId: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]]
    });
    this.loadBalances();
  }

  // loadBalances(): void {
  //   this.paymentService.getUserBalance(this.id).subscribe(
  //     balance => this.userBalance = balance,
      
  //     err => console.error(err)
     
  //   );

  //   this.paymentService.getCompanyBalance().subscribe(
  //     balance => this.companyBalance = balance,
  //     err => console.error(err)
  //   );
  // }

    loadBalances(): void {
    this.paymentService.getCompanyBalance()
      .subscribe({
        next: balance => {
          this.companyBalance = balance;
          this.cdr.markForCheck();
        },
        error: error => {
          console.error('Error loading balance:', error);
        }
      });
  }

   deposit(): void {

    if (!this.accountId || !this.amount) {
    this.message = 'Please enter both Account ID and Amount';
    return;
  }
    
    this.paymentService.deposit(this.accountId, this.amount)
      .subscribe({
        next: balance => {
          this.message = (balance as any).message || 'Deposite successful';
          this.loadBalances();
          this.cdr.markForCheck();
          this.cdr.reattach();
          this.paymentForm.reset();
           window.location.reload();
          // form reset
      this.amount = 0;
        },
        error: error => {
          console.error('Error :', error);
        }
      });
  }

  // deposit(): void {
  //   this.paymentService.deposit(this.id, this.amount).subscribe(
  //     res => {
  //       this.message = res;
  //       this.loadBalances();
  //     },
  //     err => this.message = err.error
  //   );
  // }

  // pay(): void {
  //   this.paymentService.pay(this.id, this.amount).subscribe(
  //     res => {
  //       this.message = res;
  //       this.loadBalances();
  //       this.cdr.markForCheck();
  //     },
  //     err => this.message = err.error
  //   );
  // }

  //   pay(): void {
  //   this.paymentService.pay(this.id, this.amount)
  //     .subscribe({
  //       next: res => {
  //         this.message = (res as any).message || 'Payment successful';
  //         this.loadBalances();
  //         this.cdr.reattach();
  //         //  window.location.reload();
  //         // form reset
  //     this.amount = 0;
          
  //       },
  //       error: error => {
  //         console.error('Error :', error);
  //       }
  //     });
  // }

  //  addPay(): void {
  //   this.paymentService.pay(this.id, this.amount)
  //     .subscribe({
  //       next: res => {
  //         this.message = (res as any).message || 'Payment successful';
  //         this.loadBalances();
  //         this.cdr.reattach();
  //         //  window.location.reload();
  //         // form reset
  //     this.amount = 0;
          
  //       },
  //       error: error => {
  //         console.error('Error :', error);
  //       }
  //     });
  // }

  addPay(): void {
    if (this.paymentForm.invalid) {
      this.message = 'Please fill all fields correctly';
      return;
    }

    const { senderId, receiverId, amount } = this.paymentForm.value;

    this.paymentService.payAmount(senderId, receiverId, amount)
      .subscribe({
        next: res => {
          this.message = res || 'Transfer successful';
          this.loadBalances();
          this.paymentForm.reset();
          this.cdr.detectChanges();
        },
        error: err => {
          this.message = err.error || 'Transfer failed';
          console.error('Error :', err);
        }
      });
  }



}
