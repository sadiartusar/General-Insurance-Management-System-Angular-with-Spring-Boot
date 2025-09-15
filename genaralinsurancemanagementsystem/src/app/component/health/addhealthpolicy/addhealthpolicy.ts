import { Component, OnInit } from '@angular/core';
import { HealthInsurancePolicy } from '../../../model/health.model';
import { HealthService } from '../../../service/health.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addhealthpolicy',
  standalone: false,
  templateUrl: './addhealthpolicy.html',
  styleUrl: './addhealthpolicy.css'
})
export class Addhealthpolicy implements OnInit{
  
  formGroup !: FormGroup;

  constructor(
    private healthService: HealthService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ){}
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      poliycId: [''],
      policyHolderName: [''],
      age: [''],
      gender: [''],
      policyType: [''],
      sumInsured: [''],
      premiumAmount: [''],
      policyStartDate: [''],
      policyEndDate: [''],
      nomineeName: [''],
      nomineeRelation: [''],
      contactNumber: [''],
      email: [''],
      address: [''],
    }); 
  }

  addHealthPolicy():void{
     const healthPolicy: HealthInsurancePolicy = { ...this.formGroup.value };
    this.healthService.savePolicy(healthPolicy).subscribe({
      next: (res) => {
        console.log(res);
        this.formGroup.reset();
        this.router.navigate(['/allstu']);
      },
      error: (error) => {
console.log(error);
      }
    });
  }

  

 
}
