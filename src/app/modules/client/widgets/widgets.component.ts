import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  isFull: boolean;
  isCollapsed11 = true;
  cardremove15: boolean = true;
  cardremove14: boolean = true;
  cardremove13: boolean = true;
  cardremove12: boolean = true;
  cardremove11: boolean = true;
  cardremove10: boolean = true;
  cardremove9: boolean = true;
  cardremove8: boolean = true;
  cardremove7: boolean = true;
  cardremove6: boolean = true;
  cardremove5: boolean = true;
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
    else if (number == 5) {
      this.cardremove5 = false;
    }
    else if (number == 6) {
      this.cardremove6 = false;
    }
    else if (number == 7) {
      this.cardremove7 = false;
    }
    else if (number == 8) {
      this.cardremove8 = false;
    }
    else if (number == 9) {
      this.cardremove9 = false;
    }
    else if (number == 10) {
      this.cardremove10 = false;
    }
    else if (number == 11) {
      this.cardremove11 = false;
    }
    else if (number == 12) {
      this.cardremove12 = false;
    }
    else if (number == 13) {
      this.cardremove13 = false;
    }
    else if (number == 14) {
      this.cardremove14 = false;
    }
    else if (number == 15) {
      this.cardremove15 = false;
    }
  }
  fullScreenSection(number) {
    if (number == 1) {
      if (this.isFull) {
        this.isFull = false;
      }
      else {
        this.isFull = true;
      }
    }
  }
}
