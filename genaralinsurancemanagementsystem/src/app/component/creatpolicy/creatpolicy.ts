import { Component, OnInit } from '@angular/core';
import { PolicyModel } from '../../model/policy';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PolicymodelService } from '../../service/policymodel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creatpolicy',
  standalone: false,
  templateUrl: './creatpolicy.html',
  styleUrl: './creatpolicy.css'
})
export class Creatpolicy implements OnInit{
  

formValue!: FormGroup;
  // policy: PolicyModel = new PolicyModel();
  lastBillNo: number = 1000;

  constructor(
    private policyService: PolicymodelService,
    private router: Router,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
   const currentDate = new Date().toISOString().substring(0, 10); 

   this.formValue = this.formBuilder.group({
     
      date: [''], 
      bankName: [''],
      policyholder: [''],
      address: [''],
      sumInsured: [''],
      stockInsured: [''],
      interestInsured: [''],
      coverage: ['Fire & Lightning Only'],
      location: [''],
      construction: [''],
      owner: [ '' ],
      usedAs: [''],
      periodFrom: [''],
      periodTo: [''] 

       });

    this.formValue.get('periodFrom')?.valueChanges.subscribe(value => {
      if (value) {
        const periodFromDate = new Date(value);
        const periodToDate = new Date(periodFromDate);
        periodToDate.setFullYear(periodFromDate.getFullYear() + 1);
        this.formValue.patchValue({
          periodTo: periodToDate.toISOString().substring(0, 10) 
        }, { emitEvent: false });
      }
    });

    // this.fetchLastBillNo(); // Fetch last bill number once
  }

  // fetchLastBillNo(): void {
  //   this.policyService.getLastBillNo().subscribe({
  //     next: (lastBillNo: number) => {
  //       this.lastBillNo = lastBillNo;
  //       this.setNextBillNo();
  //     },
  //     error: (err: any) => {
  //       console.error('Error fetching last bill number', err);
  //       this.setNextBillNo(); // Handle error by setting the next bill number
  //     }
  //   });
  // }

  // setNextBillNo(): void {
  //   this.lastBillNo++;
  //   this.formValue.patchValue({
  //     billNo: this.lastBillNo
  //   });
  // }

  createPolicy():void {
    const policy : PolicyModel = {...this.formValue.value}
    // this.policy = this.formValue.getRawValue();
    
    
    this.policyService.createPolicy(policy).subscribe({
        next: (res) => {
          console.log(res);
          this.formValue.reset();
          // this.fetchLastBillNo(); // Fetch the last bill number again if needed
          this.router.navigate(['/viewpolicy']);
          
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  

}
