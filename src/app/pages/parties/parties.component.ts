import { Component } from '@angular/core';
import { PartiesService } from '../../services/parties/parties.service';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css'],
})
export class PartiesComponent {
  constructor(public partiesService: PartiesService) {}

  ngOnInit(): void {
    this.getParties();
  }

  getParties() {
    this.partiesService.getParties().subscribe(
      (res) => {
        this.partiesService.parties = res;
      },
      (err) => console.log(err)
    );
  }
}
