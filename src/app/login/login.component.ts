import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private router: Router) { }

  login() {
    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password);
    if (this.email == "admin@example.com" && this.password == "admin"){
      alert("Login successful")
      this.router.navigate(['/admin'])
    }
    else if (this.email == "client@example.com" && this.password == "client"){
      alert("Login successful")
      this.router.navigate(['/client'])
    }

    }
  }