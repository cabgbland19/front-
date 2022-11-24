import { Component } from '@angular/core';
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
}
