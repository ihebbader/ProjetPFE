import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobportal-settings',
  templateUrl: './jobportal-settings.component.html',
  styleUrls: ['./jobportal-settings.component.scss']
})
export class JobportalSettingsComponent implements OnInit {
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
  }
}
