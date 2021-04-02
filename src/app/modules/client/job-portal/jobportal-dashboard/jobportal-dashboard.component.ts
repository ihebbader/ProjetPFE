import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobportal-dashboard',
  templateUrl: './jobportal-dashboard.component.html',
  styleUrls: ['./jobportal-dashboard.component.scss']
})
export class JobportalDashboardComponent implements OnInit {
  cardremove4: boolean = true;
  cardremove3: boolean = true;
  cardremove2: boolean = true;
  cardremove1: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  CardRemoveTrans(number) {

    if (number == 1) {
      this.cardremove1 = false;
    }
    else if (number == 2) {
      this.cardremove2 = false;
    }
    else if (number == 3) {
      this.cardremove3 = false;
    }
    else if (number == 4) {
      this.cardremove4 = false;
    }
  }
}
