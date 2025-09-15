import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HealthService } from '../../../service/health.service';
import { Router } from '@angular/router';
import { HealthInsurancePolicy } from '../../../model/health.model';

@Component({
  selector: 'app-healthpolicyshow',
  standalone: false,
  templateUrl: './healthpolicyshow.html',
  styleUrl: './healthpolicyshow.css'
})
export class Healthpolicyshow implements OnInit {

  policies: HealthInsurancePolicy[] = [];

  constructor(
    private healthService: HealthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadAllData();
  }

  loadAllData(): void {


    this.healthService.getAllPolicy().subscribe({

      next: (res) => {

        this.policies = res;
        console.log(res);

      },
      error: (err) => {
        console.log(err);

      }

    });


  }






  deletePolicy(id: string): void {
    this.healthService.deletePolicy(id).subscribe({

      next: () => {
        this.loadAllData();
        this.cdr.reattach();
      },
      error: (error) => {

      }
    })

  }

  getPolicyById(id: string): void {
    this.healthService.getPolicyById(id).subscribe({

      next: () => {
        this.loadAllData();
        this.router.navigate(['/showhealthpolicy', id])
      },
      error: (error) => {

      }
    })
  }
}
