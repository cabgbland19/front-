import { Component } from '@angular/core';
import { ResultsService } from '../../services/results/results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  constructor(public resultsService: ResultsService) {}

  ngOnInit(): void {
    this.getResults();
  }

  getResults() {
    this.resultsService.getResults().subscribe(
      (res) => {
        this.resultsService.results = res;
      },
      (err) => console.log(err)
    );
  }
}
