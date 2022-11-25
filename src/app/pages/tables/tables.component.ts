import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TablesService } from '../../services/tables/tables.service';
import { Table } from '../../models/tables/tables';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent {
  constructor(public tablesService: TablesService) {}

  ngOnInit(): void {
    this.getTables();
  }

  getTables() {
    this.tablesService.getTables().subscribe(
      (res) => {
        this.tablesService.tables = res;
      },
      (err) => console.log(err)
    );
  }

  postTable(form: NgForm) {
    if (form.value._id) {
      this.tablesService.putTable(form.value).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
    } else {
      this.tablesService.postTable(form.value).subscribe(
        (res) => {
          this.getTables();
          form.reset();
        },
        (err) => console.log(err)
      );
    }
  }

  deleteTable(_id: any) {
    if (confirm('Estas seguro de eliminarlo')) {
      this.tablesService.deleteTable(_id).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
    }
  }

  editTable(table: Table) {
    this.tablesService.selectedTable = table;
  }
}
