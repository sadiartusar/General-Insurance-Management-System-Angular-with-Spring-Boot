import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PolicyModel } from '../../model/policy';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillModel } from '../../model/bill.model';
import { BilmodelService } from '../../service/bilmodel.service';
import { PolicymodelService } from '../../service/policymodel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creatbill',
  standalone: false,
  templateUrl: './creatbill.html',
  styleUrl: './creatbill.css'
})
export class Creatbill implements OnInit{

   policies: PolicyModel[] = [];
  billForm!: FormGroup;
  bill: BillModel = new BillModel();

  constructor(
     private billService: BilmodelService,
    private policyService: PolicymodelService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef
  ){}
  ngOnInit(): void {
   const currentDate = new Date().toISOString().substring(0, 10); // Format as YYYY-MM-DD
    this.loadPolicies();

    this.billForm = this.formBuilder.group({
      fire: [''],
      rsd: [''],
      netPremium: [{ value: '' }], // Disable to prevent manual editing
      tax: ['.15'],
      grossPremium: [{ value: '' }], // Disable to prevent manual editing
      policies: this.formBuilder.group({
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

    this.billForm.get('policies')?.get('policyholder')?.valueChanges
      .subscribe(policyholder => {
        const selectedPolicy = this.policies.find(policy => policy.policyholder === policyholder);
        if (selectedPolicy) {
          this.billForm.get('policies')?.patchValue(selectedPolicy);
          this.calculatePremiums(); // Recalculate premiums when policyholder changes
        }
      });

    // Recalculate premiums when fire, rsd, or tax values change
    this.billForm.get('fire')?.valueChanges.subscribe(() => this.calculatePremiums());
    this.billForm.get('rsd')?.valueChanges.subscribe(() => this.calculatePremiums());
    this.billForm.get('tax')?.valueChanges.subscribe(() => this.calculatePremiums());
  }

  loadPolicies(): void {
    this.policyService.viewAllPolicy()
      .subscribe({
        next: res => {
          this.policies = res;
          this.cdr.markForCheck();
        },
        error: error => {
          console.error('Error loading policies:', error);
        }
      });
  }

  calculatePremiums(): void {
  const fireRate = parseFloat(this.billForm.get('fire')?.value) || 0;
  const rsdRate = parseFloat(this.billForm.get('rsd')?.value) || 0;
  const taxRate = parseFloat(this.billForm.get('tax')?.value) || 0;
  const sumInsured = parseFloat(this.billForm.get('policies.sumInsured')?.value) || 0;

  const netPremium = (sumInsured * fireRate) + (sumInsured * rsdRate);
  const grossPremium = netPremium + (netPremium * taxRate);

  this.billForm.patchValue({
    netPremium: netPremium.toFixed(2),
    grossPremium: grossPremium.toFixed(2)
  }, { emitEvent: false });

  console.log(`✅ fire: ${fireRate}, rsd: ${rsdRate}, tax: ${taxRate}, sumInsured: ${sumInsured}`);
  console.log(`💰 netPremium: ${netPremium}, grossPremium: ${grossPremium}`);
}



  createBill(): void {
  const formValues = this.billForm.value;
  
  this.bill.fire = formValues.fire;
  this.bill.rsd = formValues.rsd;
  this.bill.netPremium = formValues.netPremium;
  this.bill.tax = formValues.tax;
  this.bill.grossPremium = formValues.grossPremium;
  this.bill.firePolicy = formValues.policies;

  const policyId = formValues.policies.id;  // extract policyId here

  this.billService.createBill(this.bill, policyId)
    .subscribe({
      next: res => {
        this.loadPolicies();
        this.billForm.reset();
        this.router.navigate(['viewbill']);
      },
      error: error => {
        console.error('Error creating bill:', error);
      }
    });
}

}
