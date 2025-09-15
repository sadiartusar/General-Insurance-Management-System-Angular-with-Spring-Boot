import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PolicyModel } from '../../../model/policy';
import { BillModel } from '../../../model/bill.model';
import { CarModel } from '../../../model/car.model';
import { PolicymodelService } from '../../../service/policymodel.service';
import { BilmodelService } from '../../../service/bilmodel.service';
import { Router } from '@angular/router';
import { CarService } from '../../../service/car.service';
import { forkJoin } from 'rxjs';
import { CarbillmodelService } from '../../../service/carbillmodel.service';
import { CarBillModel } from '../../../model/carbil.model';

@Component({
  selector: 'app-carbill',
  standalone: false,
  templateUrl: './carbill.html',
  styleUrl: './carbill.css'
})
export class Carbill implements OnInit{
  

  // policyes: PolicyModel[]=[];
    bills: BillModel[] = [];
    cars: CarModel[]=[];
    carBill: CarBillModel[]=[];
    filteredBills: CarBillModel[] = [];

    constructor(
       private policiesService: PolicymodelService,
    private billService: BilmodelService,
    private router: Router,
    private cdr :ChangeDetectorRef,
    private carService: CarService,
    private carBillService: CarbillmodelService
    ){}


    ngOnInit(): void {
    this.loadAllData();
    // this.loadCarBills();
    // this.loadCarPolicies();
  }

   loadAllData():void{
      forkJoin({
      // policyes: this.policiesService.viewAllPolicyForBill(),
      cars: this.carService.viewAllCarPolicy(),
      // bills: this.billService.viewAllBill()
      carBill:this.carBillService.viewAllCarBill()
      }).subscribe({
        next:({cars, carBill})=>{
          this.carBill=carBill;
          this.cars=cars;
          // this.cars=this.cars;
          this.cdr.markForCheck();
        },
        error:(err)=>{
          console.log(err);
        }
      });
    }

    deleteCarBill(id: number): void {
    this.carBillService.deleteCarBill(id)
      .subscribe({
        next: () => {
          this.loadAllData();
          // this.refreshBills();
          this.cdr.reattach();
          // this.router.navigate(['/viewbill']);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  getCarBillByBillId(id: number): void{
this.carBillService.getByCarBillId(id).subscribe({

  next: () => {
        this.loadAllData();
        this.router.navigate(['/updatecarbill',id])
      },
      error: (error) => {

      }
});
  }

  editBill(bill: BillModel): void {
    this.router.navigate(['/updatecarbill', bill.id]);
  }

  navigateToAddBill() {
    this.router.navigateByUrl('/createcarbill');
  }

  navigateToAddReciept() {
    this.router.navigateByUrl('/createreciept');
  }

  getCarRate(carBill: CarBillModel): number {
    const sumInsured = carBill.carPolicy?.sumInsured || 0;
    const carRate = carBill.carRate || 0;
    return sumInsured * carRate;
  }

  getRsdAmount(carBill: CarBillModel): number {
    const sumInsured = carBill.carPolicy?.sumInsured || 0;
    const rsdRate = carBill.rsd || 0;
    return sumInsured * rsdRate;
  }

  getNetPremium(carBill: CarBillModel): number {
    const sumInsured = carBill.carPolicy.sumInsured || 0;
    const carRate = carBill.carRate || 0;
    const rsdRate = carBill.rsd || 0;

    return sumInsured * (carRate + rsdRate);
  }

  getTaxAmount(carBill: CarBillModel): number {
    const netPremium = this.getNetPremium(carBill);
    const taxRate = 0.15; // 15% fixed tax rate

    return netPremium * taxRate;
  }

  getGrossPremium(carBill: CarBillModel): number {
    const netPremium = this.getNetPremium(carBill);
    const taxAmount = this.getTaxAmount(carBill);

    return netPremium + taxAmount;
  }

  // private loadCarBills(): void {
  //   this.carBillService.viewAllCarBill().subscribe({
  //     next: (data: CarBillModel[]) => {
  //       this.carBill = data;
  //       this.cdr.markForCheck();
  //       this.filteredBills = data; // Initialize filteredBills
  //     },
  //     error: (error) => console.error('Error fetching bills:', error)
  //   });
  // }

  //  private loadCarPolicies(): void {
  //   this.carService.viewAllCarPolicyForBill().subscribe({
  //     next: (data) =>{this.cars = data;
  //       this.cdr.markForCheck(); } ,
  //     error: (error) => console.error('Error fetching policies:', error)
  //   });
  // }


}
