import { ChangeDetectorRef, Component } from '@angular/core';
import { Payment } from '../../model/payment.model';
import { PaymentService } from '../../service/payment.service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user.model';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

declare var html2pdf: any;

@Component({
  selector: 'app-showpaymentdetails',
  standalone: false,
  templateUrl: './showpaymentdetails.html',
  styleUrl: './showpaymentdetails.css'
})
export class Showpaymentdetails {

  paymentToPdf!:Payment
  paymentDetails: Payment[] = [];
  userDetails: User[] = [];
  
  constructor(
     private paymentService: PaymentService,
     private userService: UserService,   
      private router: Router,
      private cdr: ChangeDetectorRef
  ){}
    ngOnInit(): void {

      
     
     this.loadPaymentDetails();
     this.loadUserDetails();
    }
  
    

    loadPaymentDetails(): void {
    this.paymentService.getAllPaymentDetails().subscribe({
      next: (data) => {
        this.paymentDetails = data;
        this.cdr.markForCheck();
        this.router.navigate(['/showpaymentdetails'])
        console.log('Company Details:', data);
        // this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching company details', err);
        
      }
    });
}

loadUserDetails(): void {
    this.userService.getAllUserDetails().subscribe({
      next: (data) => {
        this.userDetails = data;
        this.cdr.markForCheck();
        this.router.navigate(['/showpaymentdetails'])
        console.log('Company Details:', data);
        // this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching company details', err);
        
      }
    });
}

printStatement(): void {
  const element = document.querySelector('.container') as HTMLElement;

  if (!element) {
    alert('Nothing to print!');
    return;
  }

  html2canvas(element, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    let position = 0;

    // If table is long, split into multiple pages
    if (pdfHeight > pdf.internal.pageSize.getHeight()) {
      let heightLeft = pdfHeight;

      while (heightLeft > 0) {
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
        position -= pdf.internal.pageSize.getHeight();
        if (heightLeft > 0) {
          pdf.addPage();
        }
      }
    } else {
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    }

    // filename with today's date
    const today = new Date().toISOString().split('T')[0];
    pdf.save(`payment-details-${today}.pdf`);
  });
}


}
