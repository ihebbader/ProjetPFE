import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-w-data',
  templateUrl: './w-data.component.html',
  styleUrls: ['./w-data.component.scss']
})
export class WDataComponent implements OnInit {
  isFull: any;
  isFull1: any;
  isFull2: any;
  isFull3: any;
  isFull4: any;
  isFull5: any;
  isFull6: any;
  isFull7: any;
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
    if (number == 3) {
      if (this.isFull2) {
        this.isFull2 = false;
      }
      else {
        this.isFull2 = true;
      }
    }
    if (number == 4) {
      if (this.isFull3) {
        this.isFull3 = false;
      }
      else {
        this.isFull3 = true;
      }
    }
    if (number == 5) {
      if (this.isFull4) {
        this.isFull4 = false;
      }
      else {
        this.isFull4 = true;
      }
    }
    if (number == 6) {
      if (this.isFull5) {
        this.isFull5 = false;
      }
      else {
        this.isFull5 = true;
      }
    }
    if (number == 7) {
      if (this.isFull6) {
        this.isFull6 = false;
      }
      else {
        this.isFull6 = true;
      }
    }
    if (number == 8) {
      if (this.isFull7) {
        this.isFull7 = false;
      }
      else {
        this.isFull7 = true;
      }
    }
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
  }

}
