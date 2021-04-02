import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-w-statics',
  templateUrl: './w-statics.component.html',
  styleUrls: ['./w-statics.component.scss']
})
export class WStaticsComponent implements OnInit {
  isFull: boolean;
  isFull1: boolean;
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

  fullScreenSection(number) {
    if (number == 1) {
      if (this.isFull) {
        this.isFull = false;
      }
      else {
        this.isFull = true;
      }
    }
    if (number == 2) {
      if (this.isFull1) {
        this.isFull1 = false;
      }
      else {
        this.isFull1 = true;
      }
    }
  }

}
