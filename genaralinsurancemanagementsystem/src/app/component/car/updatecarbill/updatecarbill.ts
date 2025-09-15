import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CarBillModel } from '../../../model/carbil.model';
import { Carpolicy } from '../carpolicy/carpolicy';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarService } from '../../../service/car.service';
import { CarbillmodelService } from '../../../service/carbillmodel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarModel } from '../../../model/car.model';

@Component({
  selector: 'app-updatecarbill',
  standalone: false,
  templateUrl: './updatecarbill.html',
  styleUrl: './updatecarbill.css'
})
export class Updatecarbill implements OnInit {

  //   id!: number ;
    carBill: CarBillModel = new CarBillModel();
    policies: CarModel[] = [];
    billId!: number;
    billForm!: FormGroup;
  
  
    constructor(
      private policiesService: CarService,
      private billService: CarbillmodelService,
      private formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private cdr: ChangeDetectorRef
  
    ) { }
    ngOnInit(): void {
      this.billId = this.route.snapshot.params['id'];
      console.log(this.billId);
      this.billForm = this.formBuilder.group({
        carRate: [''],
        rsd: [''],
        netPremium: [{ value: '', disabled: true }], // Disable to prevent manual editing
        tax: [''],
        grossPremium: [{ value: '', disabled: true }], // Disable to prevent manual editing
        policies: this.formBuilder.group({
          id: [undefined],
          date: [undefined],
          bankName: [undefined],
          policyholder: [undefined],
          address: [undefined],
          sumInsured: [undefined],
          stockInsured: [undefined],
          interestInsured: [undefined],
          usedAs: [undefined],
        })
      });
  
      this.loadBill();
      this.loadBillDetails();
  
      // Recalculate premiums when fire, rsd, or tax values change
      this.billForm.get('carRate')?.valueChanges.subscribe(() => this.calculatePremiums());
      this.billForm.get('rsd')?.valueChanges.subscribe(() => this.calculatePremiums());
      this.billForm.get('tax')?.valueChanges.subscribe(() => this.calculatePremiums());
    }
  
    loadBill(): void {
      this.policiesService.viewAllCarPolicyForBill()
        .subscribe({
          next: (res: CarModel[]) => {
            this.policies = res;
          },
          error: er => {
            console.log(er);
          }
        });
    }
  
    loadBillDetails(): void {
      this.billService.getByCarBillId(this.billId)
        .subscribe({
          next: (bill: CarBillModel) => {
            this.carBill = bill;
            this.billForm.patchValue({
              carRate: bill.carRate,
              rsd: bill.rsd,
              netPremium: bill.netPremium,
              tax: bill.tax,
              grossPremium: bill.grossPremium,
              policies: bill.carPolicy,
            });
          },
          error: error => {
            console.log(error);
          }
        });
    }
  
    calculatePremiums(): void {
      const formValues = this.billForm.value;
      const sumInsured = formValues.policies.sumInsured || 0;
      const carRate = formValues.carRate || 0;
      const rsdRate = formValues.rsd || 0;
      const taxRate = formValues.tax || 0;
  
      const netPremium = (sumInsured * carRate + sumInsured * rsdRate);
      const grossPremium = netPremium + (netPremium * taxRate);
  
      this.billForm.patchValue({
        netPremium: netPremium,
        grossPremium: grossPremium
      }, { emitEvent: false });
    }
  
  
  
     updateBill(): void {
      if (this.billForm.valid) {
        const updateBill: CarBillModel = {
          ...this.carBill,
          ...this.billForm.getRawValue()
        };
  
        this.billService.updateCarBill(this.billId, updateBill)
          .subscribe({
            next: res => {
              console.log('Bill updated successfully:', res);
              this.billForm.reset();
              this.cdr.markForCheck();
              this.router.navigate(['viewcarbil']);
            },
            error: error => {
              console.log('Error updating bill:', error);
            }
          });
      } else {
        console.warn('Form is invalid');
      }
    }

}
