import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../../models/result';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  URL_API = 'http://127.0.0.1:7777/Resultados';

  results: Result[] = [];

  constructor(private http: HttpClient) {}

  getResults() {
    return this.http.get<Result[]>(this.URL_API);
  }
}
