import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-healthbody',
  standalone: false,
  templateUrl: './healthbody.html',
  styleUrl: './healthbody.css'
})
export class Healthbody implements OnInit{

   planName: string = 'Shurokkha Allrounder';
  selectedDate: string = '2024-03-31';

   selectedAmount: string = '';

  policies: any;

  formGroup!:FormGroup

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    onSubmit() {
    if (!this.selectedAmount) {
      alert('Please select an amount.');
      return;
    }

    // Handle the form submission
    console.log('Health Cashback Form Submitted');
    console.log('Plan:', this.planName);
    console.log('Date:', this.selectedDate);
    console.log('Selected Amount:', this.selectedAmount);

    alert(`You selected plan "${this.planName}" with amount: ${this.selectedAmount}`);
  }
  
}
