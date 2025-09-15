import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {

  loginForm!: FormGroup;
  errorMessage: string = '';
  user: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef

  ) { }
  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.cdr.markForCheck();

  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill in all required fields correctly.';
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (res) => {
        console.log('User logged in successfully:', res);

        this.authService.storeToken(res.token);

        const role = this.authService.getUserRole();
        console.log('User role:', role);

        if (role === 'USER') {
          this.router.navigate(['/userProfile']);
        } else if (role === 'ADMIN') {
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Unknown user role.';
        }
        this.cdr.markForCheck();

        this.loginForm.reset();
      },
      error: (err) => {
        console.error('Error logging in:', err);
        this.errorMessage = 'Invalid email or password.';
      }
    });
  }

  //  getProfile() {

  //     this.authService.getProfile().subscribe({
  //       next: (data) => {
  //         this.user = data;
  //         console.log(data);
  //         this.cdr.markForCheck();

  //       },
  //       error: (err) => {
  //         console.error('Failed to load profile', err);
  //       }
  //     });
  //   }

}
