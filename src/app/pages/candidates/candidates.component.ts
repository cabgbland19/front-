import { Component } from '@angular/core';
import { CandidatesService } from '../../services/candidates/candidates.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css'],
})
export class CandidatesComponent {
  constructor(public candidatesService: CandidatesService) {}

  ngOnInit(): void {
    this.getParties();
  }

  getParties() {
    this.candidatesService.getCandidates().subscribe(
      (res) => {
        this.candidatesService.candidates = res;
      },
      (err) => console.log(err)
    );
  }
}
