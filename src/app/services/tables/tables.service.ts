import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from '../../models/tables/tables';

@Injectable({
  providedIn: 'root',
})
export class TablesService {
  URL_API = 'http://127.0.0.1:7777/Mesas';

  tables: Table[] = [];

  constructor(private http: HttpClient) {}

  getTables() {
    return this.http.get<Table[]>(this.URL_API);
  }
}
