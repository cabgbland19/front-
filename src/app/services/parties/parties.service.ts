import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Party } from '../../models/parties';

@Injectable({
  providedIn: 'root',
})
export class PartiesService {
  URL_API = 'http://127.0.0.1:7777/Partido';

  selectedParty: Party = {
    lema: '',
    nombre: '',
  };

  parties: Party[] = [];

  constructor(private http: HttpClient) {}

  getParties() {
    return this.http.get<Party[]>(this.URL_API);
  }

  postParty(party: Party) {
    return this.http.post(this.URL_API, party);
  }

  deleteParty(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }

  putParty(party: Party) {
    return this.http.put(`${this.URL_API}/${party._id}`, party);
  }
}
