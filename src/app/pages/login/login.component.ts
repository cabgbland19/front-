import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public loginService: LoginService, private router: Router) {}

  sendForm(form: NgForm) {
    this.loginService.postLogin(form).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/admin/users']);
      },
      (err) => console.log(err)
    );
  }
}
