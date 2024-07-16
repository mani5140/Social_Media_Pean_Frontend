import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value)
      this.authService.signup(this.signupForm.value).subscribe(response => {
        console.log(response.data.token)
        if (response.data.token) {
          localStorage.setItem('Bearer', response.data.token);
          this.router.navigate(['/dashboard']);
          this.authService.authStatus.next(true);
        }
      }, error => {
        alert(error.error.message)
        console.error('Signup failed', error);
      });
    }
  }
}
