import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from '../../models/tables/tables';

@Injectable({
  providedIn: 'root',
})
export class TablesService {
  URL_API = 'http://127.0.0.1:7777/Mesas';

  selectedTable: Table = {
    cantidad_inscritos: 0,
    numero: 0,
  };

  tables: Table[] = [];

  constructor(private http: HttpClient) {}

  getTables() {
    return this.http.get<Table[]>(this.URL_API);
  }

  postTable(table: Table) {
    return this.http.post(this.URL_API, table);
  }

  deleteTable(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }

  putTable(table: Table) {
    return this.http.put(`${this.URL_API}/${table._id}`, table);
  }
}
