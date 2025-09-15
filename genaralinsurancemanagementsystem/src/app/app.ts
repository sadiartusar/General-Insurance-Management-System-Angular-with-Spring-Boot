import { ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { User } from './model/user.model';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {

  routingForm!: FormGroup;
  protected title = 'genaralinsurancemanagementsystem';
  protected titleProject = 'project';

  userRole: string | null = null;
  currentUser: User | null = null;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
     @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.routingForm = this.formBuilder.group({
      routing: ['']
    });
    this.visitRouter();
  }

   ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // ✅ Safe to access localStorage in browser
      this.userRole = localStorage.getItem('userRole');

      // Subscribe to role changes from AuthService
      this.authService.userRole$.subscribe(role => {
        this.userRole = role;
        console.log('User Role updated:', role);
        this.cdr.detectChanges(); // Force UI update
      });

      // Optional: reload from localStorage on refresh
      const roleFromStorage = localStorage.getItem('userRole');
      if (roleFromStorage) {
        this.userRole = roleFromStorage;
      }
    }
  }

  visitRouter() {
    const route = this.routingForm.value.routing;
    if (route) {
      this.router.navigate([`/${route}`]);
    }
  }
}
