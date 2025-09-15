import { Component, OnInit } from '@angular/core';
import { PolicyModel } from '../../model/policy';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PolicymodelService } from '../../service/policymodel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatepolicy',
  standalone: false,
  templateUrl: './updatepolicy.html',
  styleUrl: './updatepolicy.css'
})
export class Updatepolicy implements OnInit{

   policy: PolicyModel = new PolicyModel();
  policyId !: number;
  formValue!: FormGroup; // Form group for binding form data

  constructor(
     private policyService: PolicymodelService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
     const currentDate = new Date().toISOString().substring(0, 10); // Format as YYYY-MM-DD

     this.policyId = this.route.snapshot.params['id'];

    // Initialize form with empty values
    this.formValue = this.formBuilder.group({
     
      date: [currentDate], // Initialize with current date
      bankName: [''],
      policyholder: [''],
      address: [''],
      sumInsured: [''],
      stockInsured: [''],
      interestInsured: [''],
      coverage: [''],
      location: [''],
      construction: [''],
      owner: [''],
      usedAs: [''],
      periodFrom: ['', Validators.required],
      periodTo: [{ value: '', }] 
    });

    // Fetch the policy data by ID
    this.policyService.getByPolicyId(this.policyId)
      .subscribe({
        next: res => {
          this.policy = res;
          // Patch form with the received policy data
          this.formValue.patchValue(this.policy);
          
        },
        error: error => {
          console.log(error);
        }
      });

      this.formValue.get('periodFrom')?.valueChanges.subscribe(value => {
        if (value) {
          const periodFromDate = new Date(value);
          const periodToDate = new Date(periodFromDate);
          periodToDate.setFullYear(periodFromDate.getFullYear() + 1);
          this.formValue.patchValue({
            periodTo: periodToDate.toISOString().substring(0, 10) // Format as YYYY-MM-DD
          }, { emitEvent: false });
        }
      });

  }

  //  updatePolicy() {
  //   // Update policy with the values from the form
  //   this.policyService.updatePolicy(this.id, this.formValue.value)
  //     .subscribe({
  //       next: res => {
  //         console.log(res);
  //         this.router.navigate(['/viewpolicy']); // Navigate back to the policy list after successful update
  //       },
  //       error: error => {
  //         console.log(error);
  //       }
  //     });
  // }

  updatePolicy() {
    // Update policy with the values from the form
    this.policy= this.formValue.value;
    this.policy.id=this.policyId
    this.policyService.updatePolicy(this.policyId, this.formValue.value)
      .subscribe({
        next: res => {
          console.log(res);
          this.formValue.reset();
          this.router.navigate(['/viewpolicy']); // Navigate back to the policy list after successful update
        },
        error: error => {
          console.log(error);
        }
      });
  }


}
