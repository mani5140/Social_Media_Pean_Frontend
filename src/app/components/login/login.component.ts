import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      this.authService.login(this.loginForm.value).subscribe(response => {
        // console.log(response)
        this.authService.authStatus.next(true);
        if (response.token) {
          localStorage.setItem('Bearer', response.token);
          this.router.navigate(['/dashboard']);
        }
      }, error => {
        alert(error.error.message)
        console.error('Login failed', error.error.message);
      });
    }
  }

}



