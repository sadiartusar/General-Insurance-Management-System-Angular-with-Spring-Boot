import { ChangeDetectorRef, Component } from '@angular/core';
import { PaymentService } from '../../service/payment.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: false,
  templateUrl: './payment.html',
  styleUrl: './payment.css'
})
export class Payment {

  id: number = 0; // Example user id
  amount: number = 0;
  userBalance: number = 0;
  companyBalance: number = 0;
  message: string = '';
  paymentForm!: FormGroup;

  constructor(private paymentService: PaymentService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
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
    this.paymentService.getUserBalance(this.id)
      .subscribe({
        next: balance => {
          this.userBalance = balance;
          this.cdr.markForCheck();
        },
        error: error => {
          console.error('Error loading balance:', error);
        }
      });
  }

   deposit(): void {
    this.paymentService.deposit(this.id, this.amount)
      .subscribe({
        next: balance => {
          this.message = (balance as any).message || 'Deposite successful';
          this.loadBalances();
          this.cdr.markForCheck();
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

    pay(): void {
    this.paymentService.pay(this.id, this.amount)
      .subscribe({
        next: res => {
          this.message = (res as any).message || 'Payment successful';
          this.loadBalances();
          this.cdr.reattach();
          //  window.location.reload();
          // form reset
      this.amount = 0;
          
        },
        error: error => {
          console.error('Error :', error);
        }
      });
  }
}
