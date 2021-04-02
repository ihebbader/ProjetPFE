import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pr-dashboard',
  templateUrl: './pr-dashboard.component.html',
  styleUrls: ['./pr-dashboard.component.scss']
})
export class PrDashboardComponent implements OnInit {
  transcard: boolean = true;
  isStaticsCollapsed = false;
  istickitCollapsed = false;
  staccard: boolean = true;
  isFull: any;
  isFull1: boolean;
  tickcard: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  CardRemoveTrans() {
    this.transcard = false;
  }

  CardRemoveStacs() {
    this.staccard = false;
  }
  CardRemovetikits() {
    this.tickcard = false;
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
