import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HealthInsurancePolicy } from '../../../model/health.model';
import { HealthService } from '../../../service/health.service';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-showallhealthpolicy',
  standalone: false,
  templateUrl: './showallhealthpolicy.html',
  styleUrl: './showallhealthpolicy.css'
})
export class Showallhealthpolicy implements OnInit {

  selectedAmount: string = '';

  policies: any;

  formGroup!: FormGroup


  constructor(
    private healthService: HealthService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({

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

  loadAllData(): void {
    this.policies = this.healthService.getAllPolicy();
    this.cdr.markForCheck();
  }


  addPolicy(): void {
    const healthPolicy: HealthInsurancePolicy = { ...this.formGroup.value };
    this.healthService.savePolicy(healthPolicy).subscribe({
      next: (res) => {
        console.log(res);
        this.formGroup.reset();
        this.router.navigate(['/showhealthpolicy']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }



  deletePolicy(policyId: string): void {
    this.healthService.deletePolicy(policyId).subscribe({

      next: () => {
        this.loadAllData();
        this.cdr.reattach();
      },
      error: (error) => {

      }
    })

  }

  getPolicyById(policyId: string): void {
    this.healthService.getPolicyById(policyId).subscribe({

      next: () => {
        this.loadAllData();
        this.router.navigate(['/updatepolicy', policyId])
      },
      error: (error) => {

      }
    })
  }

  onSubmit() {
    if (this.selectedAmount) {
      alert(`Amount selected: ${this.selectedAmount}`);
      // Add submission logic here
    } else {
      alert('Please select an amount.');
    }
  }



}
