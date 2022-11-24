import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from '../../models/candidate';

@Injectable({
  providedIn: 'root',
})
export class CandidatesService {
  URL_API = 'http://127.0.0.1:7777/Candidatos';

  candidates: Candidate[] = [];

  constructor(private http: HttpClient) {}

  getCandidates() {
    return this.http.get<Candidate[]>(this.URL_API);
  }
}
