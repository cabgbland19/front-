import { Component } from '@angular/core';
import { PartiesService } from '../../services/parties/parties.service';
import { Party } from '../../models/parties';
import { NgForm } from '@angular/forms';

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

  postParty(form: NgForm) {
    if (form.value._id) {
      this.partiesService.putParty(form.value).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
    } else {
      this.partiesService.postParty(form.value).subscribe(
        (res) => {
          this.getParties();
          form.reset();
        },
        (err) => console.log(err)
      );
    }
  }

  deleteParty(_id: any) {
    if (confirm('Estas seguro de eliminarlo')) {
      this.partiesService.deleteParty(_id).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
    }
  }

  editParty(party: Party) {
    this.partiesService.selectedParty = party;
  }
}
