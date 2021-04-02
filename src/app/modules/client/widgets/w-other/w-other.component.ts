import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-w-other',
  templateUrl: './w-other.component.html',
  styleUrls: ['./w-other.component.scss']
})
export class WOtherComponent implements OnInit {
  isFull: boolean;
  cardremove1: boolean = true;
  constructor() { }

  ngOnInit(): void {
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
  CardRemoveTrans(number) {

    if (number == 1) {
      this.cardremove1 = false;
    }
  }
}
