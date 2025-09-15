import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ReceiptModel } from '../../model/receipt.model';
import { ReceiptService } from '../../service/receipt.service';
import { ActivatedRoute, Router } from '@angular/router';

declare var html2pdf: any;

@Component({
  selector: 'app-print-fire-moneyreceipt',
  standalone: false,
  templateUrl: './print-fire-moneyreceipt.html',
  styleUrls: ['./print-fire-moneyreceipt.css'] // fixed
})
export class PrintFireMoneyreceipt implements OnInit {

  id!:string
  moneyreceipt!: ReceiptModel;
  // moneyreceipt: ReceiptModel[] = [];

  constructor(
    private moneyreceiptService: ReceiptService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.moneyreceiptService.getReciptById(id).subscribe({
      next: (response) => {
        this.moneyreceipt = response;
        this.cdr.markForCheck();
        

        console.log(this.moneyreceipt);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getSumInsured(): number {
    return this.moneyreceipt?.fireBill?.firePolicy?.sumInsured ?? 0;
  }

  getFireRate(): number {
    return this.moneyreceipt?.fireBill?.fire ?? 0;
  }

  getTotalFire(): number {
    return this.getSumInsured() * this.getFireRate();
  }

  getRsdRate(): number {
    return this.moneyreceipt?.fireBill?.rsd ?? 0;
  }

  getTotalRsd(): number {
    return this.getSumInsured() * this.getRsdRate();
  }

  getTaxRate(): number {
    return this.moneyreceipt?.fireBill?.tax ?? 0;
  }

  getTotalPremium(): number {
    return this.getSumInsured() * (this.getFireRate() + this.getRsdRate());
  }

  getTotalTax(): number {
    return this.getTotalPremium() * this.getTaxRate();
  }

  getTotalPremiumWithTax(): number {
    return this.getTotalPremium() + this.getTotalTax();
  }

  isDataLoaded(): boolean {
    return !!this.moneyreceipt;
  }

  
   printStatement(): void {
    const element = document.getElementById('statementTable');
    const opt = {
      margin: 0.5,
      filename: `fire-statement-${this.moneyreceipt.id}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    if (element) {
      html2pdf().set(opt).from(element).save();
    } else {
      alert('Nothing to print!');
    }
  }



}
