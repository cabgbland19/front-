import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TablesService } from '../../services/tables/tables.service';

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
    this.tablesService.postTable(form.value).subscribe(
      (res) => {
        this.getTables();
        form.reset();
      },
      (err) => console.log(err)
    );
  }
}
