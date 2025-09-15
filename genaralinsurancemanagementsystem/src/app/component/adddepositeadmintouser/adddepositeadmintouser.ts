import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaymentService } from '../../service/payment.service';
import { Router } from '@angular/router';
import { Account } from '../../model/account.model';

@Component({
  selector: 'app-adddepositeadmintouser',
  standalone: false,
  templateUrl: './adddepositeadmintouser.html',
  styleUrl: './adddepositeadmintouser.css'
})
export class Adddepositeadmintouser {

  accountId!:number
//  id: number = 1; // Example user id
  amount: number = 0;
  userBalance: number | undefined;



  companyBalance: number = 0;
  message: string = '';
  paymentForm!: FormGroup;
  // voltId:Number=1;
  accountIdforUser!: Account;

  constructor(private paymentService: PaymentService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder,
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
  if (!this.accountId) {
    this.userBalance = undefined;
    return;
  }

  this.paymentService.getUserBalance(this.accountId)
    .subscribe({
      next: balance => {
        this.userBalance = balance;
        this.cdr.markForCheck();
      },
      error: error => {
        console.error('Error loading balance:', error);
        this.userBalance = undefined;
        this.message = 'Failed to load user balance';
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
          // reset form fields
      this.accountId = 0;
      this.amount = 0;

      this.cdr.detectChanges(); // update view
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

  // addPay(): void {
  //   if (this.paymentForm.invalid) {
  //     this.message = 'Please fill all fields correctly';
  //     return;
  //   }

  //   const { senderId, receiverId, amount } = this.paymentForm.value;

  //   this.paymentService.payAmount(senderId, receiverId, amount)
  //     .subscribe({
  //       next: res => {
  //         this.message = res || 'Transfer successful';
  //         this.loadBalances();
  //         this.paymentForm.reset();
  //         this.cdr.detectChanges();
  //       },
  //       error: err => {
  //         this.message = err.error || 'Transfer failed';
  //         console.error('Error :', err);
  //       }
  //     });
  // }
}
