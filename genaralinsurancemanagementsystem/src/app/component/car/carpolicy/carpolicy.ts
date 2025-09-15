import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CarService } from '../../../service/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carpolicy',
  standalone: false,
  templateUrl: './carpolicy.html',
  styleUrl: './carpolicy.css'
})
export class Carpolicy implements OnInit{

   cars: any;

  constructor(
   private carService: CarService,   
    private router: Router,
    private cdr: ChangeDetectorRef
){}



  ngOnInit(): void {
   
   this.loadCarPolicy();
  }

  loadCarPolicy(): void{
    this.cars=this.carService.getAllCarPolicy();
    this.cdr.markForCheck();
  }

   deleteCarPolicy(id: number) {
    this.carService.deleteCarPolicy(id)
      .subscribe({
        next: (res) => {
          console.log(res);
           this.loadCarPolicy();
        this.cdr.reattach();
        },
        error: (error) => {
          console.log(error);

        }

      });
  }

   getCarPolicyById(id: number): void{
this.carService.getByCarPolicyId(id).subscribe({

  next: () => {
        this.loadCarPolicy();
        this.router.navigate(['/updatecarpolicy',id])
      },
      error: (error) => {

      }
})
  }

  // editPolicy(id: string) {
  //   this.router.navigate(['/updatepolicy', id]);
  // }



}
