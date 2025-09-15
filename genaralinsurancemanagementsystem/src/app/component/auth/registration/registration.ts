import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {

  @ViewChild('photoInput') photoInputRef!: ElementRef<HTMLInputElement>;

  regForm!: FormGroup;
  photoFile: File | null = null;
  isAdminSelected: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {
    this.regForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      role: ['USER', Validators.required],
      adminCode: ['']
    });
  }

  onRoleChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.isAdminSelected = select.value === 'ADMIN';

    if (!this.isAdminSelected) {
      this.regForm.get('adminCode')?.reset();
    }
  }

  onPhotoSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.photoFile = input.files[0];
    }
  }

  onSubmit() {
    if (this.regForm.invalid) {
      alert('Please fill out all required fields.');
      return;
    }

    if (!this.photoFile) {
      alert('Please upload a photo.');
      return;
    }

    const { name, email, password, phone, role, adminCode } = this.regForm.value;
    const user = { name, email, password, phone };

    const resetFormState = () => {
      this.regForm.reset({ role: 'USER' });
      this.photoFile = null;
      this.isAdminSelected = false;

      if (this.photoInputRef) {
        this.photoInputRef.nativeElement.value = '';
      }
    };

    if (role === 'ADMIN') {
      this.authService.registerAdmin(user, this.photoFile, adminCode).subscribe({
        next: (res) => {
          alert(res);
          resetFormState();
        },
        error: err => alert('Admin registration failed: ' + (err.error?.message || err.message))
      });
    } else {
      this.authService.registerUser(user, this.photoFile).subscribe({
        next: (res) => {
          alert(res);
          resetFormState();
        },
        error: err => alert('User registration failed: ' + (err.error?.message || err.message))
      });
    }
  }

}
