import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private router: Router){}
  login() {
    // Implement login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    localStorage.setItem('username', this.username);
    this.router.navigateByUrl('home');
  }
}
