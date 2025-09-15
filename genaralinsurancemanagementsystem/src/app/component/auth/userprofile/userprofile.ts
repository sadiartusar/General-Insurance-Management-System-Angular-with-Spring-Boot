import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { BilmodelService } from '../../../service/bilmodel.service';
import { BillModel } from '../../../model/bill.model';
import { ReceiptModel } from '../../../model/receipt.model';
import { ReceiptService } from '../../../service/receipt.service';

@Component({
  selector: 'app-userprofile',
  standalone: false,
  templateUrl: './userprofile.html',
  styleUrl: './userprofile.css'
})
export class Userprofile implements OnInit{

   moneyreceipt!: ReceiptModel;
   user: any | null = null;
   bill: BillModel | null=null;
   receipt: ReceiptModel | null=null;
  private subscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService, // ✅ fixed spelling
    private router: Router,
    private userSer: UserService,
    private billService: BilmodelService,
    private receiptService: ReceiptService,
    private cdr: ChangeDetectorRef,
     private moneyreceiptService: ReceiptService,
    
    private route: ActivatedRoute,
    
  ) { }
  ngOnInit(): void {
     const id = this.route.snapshot.params['id'];
    this.moneyreceiptService.getReciptById(id).subscribe({
      next: (response) => {
        this.moneyreceipt = response;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.log(error);
      }
    });
    this.isDataLoaded();
    // this.loadUserProfile();
    this.getProfile();
  }

  loadUserProfile(): void{
    const sub= this.userSer.getUserProfile().subscribe({
      next:(res)=>{
        console.log(res);
        if(res){
          this.user=res;
          this.getUserShowPolicyByBillNo(this.user.id);
          this.cdr.markForCheck();
        }
      },
      error:(err)=>{
        console.log('Error Loading User Profile', err);
      }
    });

    this.subscription.add(sub);

  }

  getProfile() {

    this.authService.getProfile().subscribe({
      next: (data) => {
        
        this.user = data;
        this.getUserShowPolicyByBillNo(this.user.id);
        console.log(data);
        this.cdr.markForCheck();

      },
      error: (err) => {
        console.error('Failed to load profile', err);
      }
    });
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  getUserShowPolicyByBillNo(id:number):void{
    this.receiptService.getReciptById(id).subscribe({
      next:(data)=>{
      this.receipt=data;
      this.cdr.markForCheck();
      }

    });
  }

  getSumInsured(): number {
    return this.moneyreceipt?.fireBill?.firePolicy?.sumInsured ?? 0;
  }

  getFireRate(): number {
    return (this.moneyreceipt?.fireBill?.fire ?? 0) / 100;
  }

  getTotalFire(): number {
    const sumInsured = this.getSumInsured();
    const fireRate = this.getFireRate();
    return Math.round(sumInsured * fireRate);
  }

  getRsdRate(): number {
    return (this.moneyreceipt?.fireBill?.rsd ?? 0) / 100;
  }

  getTotalRsd(): number {
    const sumInsured = this.getSumInsured();
    const rsdRate = this.getRsdRate();
    return Math.round(sumInsured * rsdRate);
  }

  getTaxRate(): number {
    return (this.moneyreceipt?.fireBill?.tax ?? 0) / 100;
  }

    getTotalPremium(): number {
    const sumInsured = this.getSumInsured();
    const fireRate = this.getFireRate();
    const rsdRate = this.getRsdRate();
    return Math.round(sumInsured * (fireRate + rsdRate));
  }

  getTotalTax(): number {
    const totalPremium = this.getTotalPremium();
    const taxRate = this.getTaxRate();
    return Math.round(totalPremium * taxRate);
  }

   getTotalPremiumWithTax(): number {
    const totalPremium = this.getTotalPremium();
    const totalTax = this.getTotalTax();
    return Math.round(totalPremium + totalTax);
  }
    getTotalPremiumWithTaxForMonthly(): number {
    const totalPremium = this.getTotalPremium();
    const totalTax = this.getTotalTax();
    return Math.round((totalPremium + totalTax) / 12);
  }

   isDataLoaded(): boolean {
    return !!this.moneyreceipt;
  }

}
