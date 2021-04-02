import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-w-social',
  templateUrl: './w-social.component.html',
  styleUrls: ['./w-social.component.scss']
})
export class WSocialComponent implements OnInit {
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
