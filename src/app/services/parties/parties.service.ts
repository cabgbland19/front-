import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Party } from '../../models/parties';

@Injectable({
  providedIn: 'root',
})
export class PartiesService {
  URL_API = 'http://127.0.0.1:7777/Partido';

  parties: Party[] = [];

  constructor(private http: HttpClient) {}

  getParties() {
    return this.http.get<Party[]>(this.URL_API);
  }
}
