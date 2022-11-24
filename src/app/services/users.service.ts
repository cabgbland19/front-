import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL_API = ''

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.URL_API)
  }
}
