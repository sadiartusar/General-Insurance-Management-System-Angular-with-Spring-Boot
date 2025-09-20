import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CarModel } from '../../../model/car.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarBillModel } from '../../../model/carbil.model';
import { CarbillmodelService } from '../../../service/carbillmodel.service';
import { CarService } from '../../../service/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carbillcreat',
  standalone: false,
  templateUrl: './carbillcreat.html',
  styleUrl: './carbillcreat.css'
})
export class Carbillcreat implements OnInit{
  

   cars: CarModel[] = [];
  billForm!: FormGroup;
  carBill: CarBillModel = new CarBillModel();

  constructor(
 private carBillService: CarbillmodelService,
    private carService: CarService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef
  ){}


  ngOnInit(): void {
    const currentDate = new Date().toISOString().substring(0, 10); // Format as YYYY-MM-DD
    this.loadCarPolicies();

    this.billForm = this.formBuilder.group({
      carRate: [''],
      rsd: [''],
      netPremium: [{ value: '' }], // Disable to prevent manual editing
      tax: ['.15'],
      grossPremium: [{ value: '' }], // Disable to prevent manual editing
      cars: this.formBuilder.group({
        id: [undefined],
        date: [currentDate],
        bankName: [undefined],
        policyholder: [undefined],
        address: [undefined],
        sumInsured: [undefined],
        stockInsured: [undefined],
        interestInsured: [undefined],
        coverage: [undefined],
        location: [undefined],
        construction: [undefined],
        owner: [undefined],
        usedAs: [undefined],
        periodFrom: ['', Validators.required],
        periodTo: [ '' ]
      })
    });

    this.loadCarPolicies();

    this.billForm.get('periodFrom')?.valueChanges.subscribe(value => {
      if (value) {
        const periodFromDate = new Date(value);
        const periodToDate = new Date(periodFromDate);
        periodToDate.setFullYear(periodFromDate.getFullYear() + 1);
        this.billForm.patchValue({
          periodTo: periodToDate.toISOString().substring(0, 10) // Format as YYYY-MM-DD
        }, { emitEvent: false });
      }
    });

    this.billForm.get('cars')?.get('policyholder')?.valueChanges
      .subscribe(policyholder => {
        const selectedPolicy = this.cars.find(policy => policy.policyholder === policyholder);
        if (selectedPolicy) {
          this.billForm.get('cars')?.patchValue(selectedPolicy);
          this.calculatePremiums(); // Recalculate premiums when policyholder changes
        }
      });

    // Recalculate premiums when carRate, rsd, or tax values change
    this.billForm.get('carRate')?.valueChanges.subscribe(() => this.calculatePremiums());
    this.billForm.get('rsd')?.valueChanges.subscribe(() => this.calculatePremiums());
    this.billForm.get('tax')?.valueChanges.subscribe(() => this.calculatePremiums());
  }

  loadCarPolicies(): void {
    this.carService.viewAllCarPolicy()
      .subscribe({
        next: res => {
          this.cars = res;
          this.cdr.markForCheck();
        },
        error: error => {
          console.error('Error loading policies:', error);
        }
      });
  }

  calculatePremiums(): void {
  const carRate = parseFloat(this.billForm.get('carRate')?.value) || 0;
  const rsdRate = parseFloat(this.billForm.get('rsd')?.value) || 0;
  const taxRate = parseFloat(this.billForm.get('tax')?.value) || 0;
  const sumInsured = parseFloat(this.billForm.get('cars.sumInsured')?.value) || 0;

  const netPremium = (sumInsured * carRate) + (sumInsured * rsdRate);
  const grossPremium = netPremium + (netPremium * taxRate);

  this.billForm.patchValue({
    netPremium: netPremium.toFixed(2),
    grossPremium: grossPremium.toFixed(2)
  }, { emitEvent: false });

  console.log(`🔍 sumInsured: ${sumInsured}, carRate: ${carRate}, rsd: ${rsdRate}, tax: ${taxRate}`);
  console.log(`💰 Net Premium: ${netPremium}, Gross Premium: ${grossPremium}`);
}


  createCarBill(): void {
    const formValues = this.billForm.value;

    this.carBill.carRate = formValues.carRate;
    this.carBill.rsd = formValues.rsd;
    this.carBill.netPremium = formValues.netPremium;
    this.carBill.tax = formValues.tax;
    this.carBill.grossPremium = formValues.grossPremium;
    this.carBill.carPolicy = formValues.cars;

    const carPolicyId = formValues.cars.id;  // extract policyId here

    this.carBillService.createCarBill(this.carBill,carPolicyId)
      .subscribe({
        next: res => {
          this.loadCarPolicies();
          this.billForm.reset();
          this.router.navigate(['viewcarbil']);
        },
        error: error => {
          console.error('Error creating bill:', error);
        }
      });
  }

}
