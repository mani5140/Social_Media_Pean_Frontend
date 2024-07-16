import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.isAuthenticated.subscribe(status => {
      this.isAuthenticated = status;
    });
  }

}
