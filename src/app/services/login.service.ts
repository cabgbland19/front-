import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../models/login';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  URL_API = 'http://127.0.0.1:7777/login';

  login: LoginUser = {
    correo: '',
    contrasena: '',
  };

  constructor(private http: HttpClient) {}

  postLogin(form: NgForm) {
    return this.http.post<any>(this.URL_API, form.value);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
//   (res) => {
//     console.log(res);

//     // localStorage.setItem('token', res.token)
//     form.reset();
//   },
//   (err) => alert('Correo o contraseña incorrecta')
// );
