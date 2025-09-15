import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CarModel } from '../../../model/car.model';
import { CarBillModel } from '../../../model/carbil.model';
import { CarReceiptModel } from '../../../model/carreceipt.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarreceiptService } from '../../../service/carreceipt.service';
import { CarbillmodelService } from '../../../service/carbillmodel.service';
import { CarService } from '../../../service/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creatcarreciept',
  standalone: false,
  templateUrl: './creatcarreciept.html',
  styleUrl: './creatcarreciept.css'
})
export class Creatcarreciept implements OnInit {

  id!:number
  policies: CarModel[] = [];
  carBill: CarBillModel[] = [];
  receipt: CarReceiptModel = new CarReceiptModel();
  selectedBill?: CarBillModel;
  receiptForm!: FormGroup;

  constructor(
    private carReceiptService: CarreceiptService,
    private carBillService: CarbillmodelService,
    private carPolicyService: CarService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }
  ngOnInit(): void {
    this.loadCarBill();
    this.loadCarPolicies();

    this.receiptForm = this.formBuilder.group({
      id:[''],
      issuingOffice: [''],
      classOfInsurance: [''],
      date: [''],
      modeOfPayment: [''],
      issuedAgainst: [''],
      carBill: this.formBuilder.group({
        id: [''],
        carRate: [''],
        rsd: [''],
        netPremium: [''],
        tax: [''],
        grossPremium: [''],
        cars: this.formBuilder.group({
          id: [''],
          
          date: [''],
          bankName: [''],
          policyholder: [''],
          address: [''],
          sumInsured: [''],
          stockInsured: [''],
          interestInsured: [''],
          location: [''],
          construction: [''],
          owner: [''],
          usedAs: [''],
          periodFrom: [''],
          periodTo: ['']
        })
      })
    });

    // Auto-fill selected bill on policyholder change
    this.receiptForm.get('carBill.cars.policyholder')?.valueChanges.subscribe(policyholder => {
      this.selectedBill = this.carBill.find(b => b.carPolicy.policyholder === policyholder);
      if (this.selectedBill) {
        this.receiptForm.patchValue({
          carBill: {
            id: this.selectedBill.id,
            carRate: this.selectedBill.carRate,
            rsd: this.selectedBill.rsd,
            netPremium: this.selectedBill.netPremium,
            tax: this.selectedBill.tax,
            grossPremium: this.selectedBill.grossPremium,
            cars: this.selectedBill.carPolicy
          }
        });
      }
    });
  }

  loadCarPolicies(): void {
    this.carPolicyService.viewAllCarPolicyForBill().subscribe({
      next: (res) => {
        this.policies = res;
        this.cdr.markForCheck();
        console.log('Policies:', res);
      },
      error: (err) => {
        console.error('Error loading policies:', err);
      }
    });
  }

  loadCarBill(): void {
    this.carBillService.getAllCarBillForReciept().subscribe({
      next: (res) => {
        this.carBill = res;
        this.cdr.markForCheck();
        console.log('Bills:', res);
      },
      error: (err) => {
        console.error('Error loading bills:', err);
      }
    });
  }

  createCarReceipt(): void {
    if (this.receiptForm.valid) {
      const formValues = this.receiptForm.value;

      // Assign all fields explicitly
      this.receipt = {
        id: formValues.id,
        issuingOffice: formValues.issuingOffice,
        classOfInsurance: formValues.classOfInsurance,
        date: formValues.date,
        modeOfPayment: formValues.modeOfPayment,
        issuedAgainst: formValues.issuedAgainst,
        carBill: formValues.bill
      };

      const carBillId = formValues.carBill.id; // ✅ fixed

      this.carReceiptService.creatCarRecipt(this.receipt,carBillId).subscribe({
        next: (res) => {
          this.loadCarBill();
          this.loadCarPolicies();
          this.receiptForm.reset();
          this.cdr.reattach();
          this.router.navigate(['/viewcarreciept']);
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      console.warn('Form is Invalid');
    }
  }

  


}
