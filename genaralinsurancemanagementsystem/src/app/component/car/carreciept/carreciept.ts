import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CarReceiptModel } from '../../../model/carreceipt.model';
import { CarreceiptService } from '../../../service/carreceipt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carreciept',
  standalone: false,
  templateUrl: './carreciept.html',
  styleUrl: './carreciept.css'
})
export class Carreciept implements OnInit{

  moneyreceipts: CarReceiptModel[] = [];
    filteredMoneyReceipts: CarReceiptModel[] = []; 
    searchTerm: string = '';            
    sortBy: 'issuingOffice' | 'policyholder' | 'id' | 'bankName' = 'policyholder'; 

    receipts: CarReceiptModel[]=[];

    constructor(
  
  private carReceiptService: CarreceiptService,
  private router: Router,
  private cdr: ChangeDetectorRef
 
){}
  ngOnInit(): void {
    this.loadCarReceipts();
  }

   loadCarReceipts(): void{
    this.carReceiptService.getAllCarReciept().subscribe({
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

  viewCarReceipt(id: number):void{
    this.router.navigate(['/printcarreciept', id]);
  }

  deleteCarReceipt(id:number): void{
    this.carReceiptService.deleteCarRecipt(id).subscribe({
      next:()=>{
        this.moneyreceipts=this.moneyreceipts.filter(receipt => receipt.id !==id);
        this.filteredMoneyReceipts= this.filteredMoneyReceipts.filter(receipt =>receipt.id !==id);
        this.cdr.markForCheck();
        this.loadCarReceipts();
        this.router.navigate(['/viewcarreciept']);
        
      }
    });
  }

  viewMoneyReceipt(id: number) {
    this.router.navigate(['/printmoneyreciept', id]);
  }

  printCarCoverNote(id: number) {
    this.router.navigate(['/printcarcovernote', id]);
  }

  navigateToAddReciept(){
    this.router.navigate(['createcarreceipt']);
  }

  searchMoneyReceipt(): void {
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
  
    this.filteredMoneyReceipts = this.moneyreceipts.filter(item =>
      item.issuingOffice?.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.carBill?.carPolicy.policyholder?.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.carBill?.carPolicy.bankName?.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.carBill?.carPolicy.id?.toString().includes(lowerCaseSearchTerm)
    );
  }

}
