import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  URL_API = 'http://127.0.0.1:7777/Usuarios';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.URL_API);
  }
}
