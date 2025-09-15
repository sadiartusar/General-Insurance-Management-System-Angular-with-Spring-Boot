import { ChangeDetectorRef, Component } from '@angular/core';

import { PaymentService } from '../../service/payment.service';
import { Router } from '@angular/router';
import { CompanyVoltAccount } from '../../model/companyvolt.model';

@Component({
  selector: 'app-showcompanyvolt',
  standalone: false,
  templateUrl: './showcompanyvolt.html',
  styleUrl: './showcompanyvolt.css'
})
export class Showcompanyvolt {

company_volt_account: CompanyVoltAccount[] = [];
  
  constructor(
     private paymentService: PaymentService,   
      private router: Router,
      private cdr: ChangeDetectorRef
  ){}
    ngOnInit(): void {
     
     this.loadCompanyDetails();
    }
  
    // loadVoltAccountDetails(): void{
    //   this.company_volt_account=this.paymentService.getAllCompanyDetails();
    //   this.cdr.markForCheck();
    // }

    loadCompanyDetails(): void {
    this.paymentService.getAllCompanyDetails().subscribe({
      next: (data) => {
        this.company_volt_account = data;
        this.cdr.markForCheck();
        this.router.navigate(['/showcompanyvolt'])
        console.log('Company Details:', data);
        // this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching company details', err);
        
      }
    });
  }

  


    //  deletePolicy(id: number) {
    //   this.policyService.deletePolicy(id)
    //     .subscribe({
    //       next: (res) => {
    //         console.log(res);
    //          this.loadPolicy();
    //       this.cdr.reattach();
    //       },
    //       error: (error) => {
    //         console.log(error);
  
    //       }
  
    //     });
    // }
  
  //    getPolicyById(id: number): void{
  // this.policyService.getByPolicyId(id).subscribe({
  
  //   next: () => {
  //         this.loadPolicy();
  //         this.router.navigate(['/updatepolicy',id])
  //       },
  //       error: (error) => {
  
  //       }
  // })
  //   }
  

}
