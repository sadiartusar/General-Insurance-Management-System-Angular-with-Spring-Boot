import { ChangeDetectorRef, Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { PolicymodelService } from '../../service/policymodel.service';

@Component({
  selector: 'app-policy',
  standalone: false,
  templateUrl: './policy.html',
  styleUrl: './policy.css'
})
export class Policy implements OnInit{

  policies: any;

constructor(
   private policyService: PolicymodelService,   
    private router: Router,
    private cdr: ChangeDetectorRef
){}
  ngOnInit(): void {
   
   this.loadPolicy();
  }

  loadPolicy(): void{
    this.policies=this.policyService.getAllPolicies();
    this.cdr.markForCheck();
  }

   deletePolicy(id: number) {
    this.policyService.deletePolicy(id)
      .subscribe({
        next: (res) => {
          console.log(res);
           this.loadPolicy();
        this.cdr.reattach();
        },
        error: (error) => {
          console.log(error);

        }

      });
  }

   getPolicyById(id: number): void{
this.policyService.getByPolicyId(id).subscribe({

  next: () => {
        this.loadPolicy();
        this.router.navigate(['/updatepolicy',id])
      },
      error: (error) => {

      }
})
  }

  


}
