import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router, private authService : AuthService) {}

  public User: any = {};

  navigateToDashBoard() {
    this.router.navigate(['/dashbord']);
  }

  createUser(){
    console.log(this.User);
    this.router.navigate(['/dashbord']);
  }
}
