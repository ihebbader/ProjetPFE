import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr-events',
  templateUrl: './hr-events.component.html',
  styleUrls: ['./hr-events.component.scss']
})
export class HrEventsComponent implements OnInit {
  isTimelineCollapsed: boolean = true;
  isFull: any;
  activitycard: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  CardRemoveActivity() {
    this.activitycard = false;
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
