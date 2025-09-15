import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarService } from '../../../service/car.service';
import { Router } from '@angular/router';
import { CarModel } from '../../../model/car.model';

@Component({
  selector: 'app-creatcarpolicy',
  standalone: false,
  templateUrl: './creatcarpolicy.html',
  styleUrl: './creatcarpolicy.css'
})
export class Creatcarpolicy implements OnInit{

formValue!: FormGroup;
  // policy: PolicyModel = new PolicyModel();
  lastBillNo: number = 1000;

  constructor(
    private carService: CarService,
    private router: Router,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
  //  const currentDate = new Date().toISOString().substring(0, 10); 

   this.formValue = this.formBuilder.group({
      
      date: [''], 
      bankName: [''],
      policyholder: [''],
      address: [''],
      sumInsured: [''],
      stockInsured: [''],
      interestInsured: [''],
      coverage: ['Engine Damage Only'],
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

  createCarPolicy():void {
    const car : CarModel = {...this.formValue.value}
    // this.policy = this.formValue.getRawValue();
    
    
    this.carService.createCarPolicy(car).subscribe({
        next: (res) => {
          console.log(res);
          this.formValue.reset();
          // this.fetchLastBillNo(); // Fetch the last bill number again if needed
          this.router.navigate(['/viewcarpolicy']);
          
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

}
