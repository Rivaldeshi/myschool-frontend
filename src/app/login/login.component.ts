import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public Credentials: any = {};
  constructor(private router: Router, private authService : AuthService) {}
  Login() {

    console.log(this.Credentials)
  }
}
