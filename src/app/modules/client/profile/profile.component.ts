import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  cardremove1: boolean = true;
  cardremove2: boolean = true;
  cardremove3: boolean = true;
  CalenderTab: boolean = true;
  TimelineTab: boolean;
  ProfileTab: boolean;
  BlogTab: boolean;
  isFull: boolean;
  isCommentCollapsed: boolean = true;
  isCommentCollapsed1: boolean = true;
  isCommentCollapsed2: boolean = true;
  isFull1: any;
  isFull2: any;
  constructor() { }

  ngOnInit(): void {
  }
  CardRemoveTrans(number) {

    if (number == 1) {
      this.cardremove1 = false;
    }
    if (number == 2) {
      this.cardremove2 = false;
    }
    if (number == 3) {
      this.cardremove3 = false;
    }
  }
  onTab(number) {
    this.CalenderTab = false;
    this.TimelineTab = false;
    this.ProfileTab = false;
    this.BlogTab = false;

    if (number == '1') {
      this.CalenderTab = true;
    }
    else if (number == '2') {
      this.TimelineTab = true;
    }
    else if (number == '3') {
      this.ProfileTab = true;
    }
    else if (number == '4') {
      this.BlogTab = true;
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
    if (number == 3) {
      if (this.isFull2) {
        this.isFull2 = false;
      }
      else {
        this.isFull2 = true;
      }
    }
  }
}
