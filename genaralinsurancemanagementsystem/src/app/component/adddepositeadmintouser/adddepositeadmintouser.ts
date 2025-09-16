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

  accountId!: number;
  amount: number = 0;
  userBalance: number | undefined;
  companyBalance: number = 0;
  message: string = '';
  paymentForm!: FormGroup;
  accountIdforUser!: Account;

  constructor(
    private paymentService: PaymentService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // load company balance on init if needed
    this.paymentService.getCompanyBalance().subscribe({
      next: balance => this.companyBalance = balance,
      error: err => console.error(err)
    });
  }

  // 🔑 Called when user leaves (focus out) from Account ID input
  loadBalances(): void {
    if (!this.accountId) {
      this.userBalance = undefined;
      return;
    }

    this.paymentService.getUserBalance(this.accountId).subscribe({
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

    this.paymentService.deposit(this.accountId, this.amount).subscribe({
      next: balance => {
        this.message = (balance as any).message || 'Deposit successful';
        this.loadBalances();
        this.cdr.markForCheck();

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
}
