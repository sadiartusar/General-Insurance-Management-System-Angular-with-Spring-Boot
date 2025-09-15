import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ReceiptModel } from '../../model/receipt.model';

import { ReceiptService } from '../../service/receipt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reciept',
  standalone: false,
  templateUrl: './reciept.html',
  styleUrl: './reciept.css'
})
export class Reciept implements OnInit{
 moneyreceipts: ReceiptModel[] = [];
  filteredMoneyReceipts: ReceiptModel[] = []; 
  searchTerm: string = '';            
  sortBy: 'issuingOffice' | 'policyholder' | 'id' | 'bankName' = 'policyholder'; 

receipts: ReceiptModel[]=[];

constructor(
  
  private receiptService: ReceiptService,
  private router: Router,
  private cdr: ChangeDetectorRef
 
){}

  ngOnInit(): void {
    this.loadReceipts();
  }

  loadReceipts(): void{
    this.receiptService.getAllReciept().subscribe({
      next:(res)=>{
        this.moneyreceipts=res;
        this.cdr.markForCheck();
        this.filteredMoneyReceipts=[...this.moneyreceipts];
      },
      error:(err)=>{
        console.log(err);
        alert('Faild to feth receips.Please Try again');
      }
    });
  }

  //   loadReceipts(): void {
  //   this.receiptService.getAllReciept().subscribe({
  //     next: response => {
  //       this.moneyreceipts = response;
  //       this.filteredMoneyReceipts = [...this.moneyreceipts]; // Initialize filtered receipts
  //     },
  //     error: error => {
  //       console.error('Error fetching money receipts:', error);
  //       alert('Failed to fetch money receipts. Please try again.');
  //     }
  //   });
  // }

  viewReceipt(id: number):void{
    this.router.navigate(['/printreciept', id]);
  }

  deleteReceipt(id:number): void{
    this.receiptService.deleteRecipt(id).subscribe({
      next:()=>{
        this.moneyreceipts=this.moneyreceipts.filter(receipt => receipt.id !==id);
        this.filteredMoneyReceipts= this.filteredMoneyReceipts.filter(receipt =>receipt.id !==id);
        this.cdr.markForCheck();
        this.loadReceipts();
        this.router.navigate(['/viewreciept']);
        
      }
    });
  }

  viewMoneyReceipt(id: number) {
    this.router.navigate(['/printmoneyreciept', id]);
  }

  printFireCoverNote(id: number) {
    this.cdr.markForCheck();
   
    this.router.navigate(['/printfirecovernote', id]);
  }

  navigateToAddReciept(){
    this.router.navigate(['createreceipt']);
  }

  searchMoneyReceipt(): void {
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
  
    this.filteredMoneyReceipts = this.moneyreceipts.filter(item =>
      item.issuingOffice?.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.fireBill?.firePolicy.policyholder?.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.fireBill?.firePolicy.bankName?.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.fireBill?.firePolicy.id?.toString().includes(lowerCaseSearchTerm)
    );
  }

}
