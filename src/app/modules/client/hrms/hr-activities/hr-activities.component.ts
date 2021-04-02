import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-hr-activities',
  templateUrl: './hr-activities.component.html',
  styleUrls: ['./hr-activities.component.scss']
})
export class HrActivitiesComponent implements OnInit {
  isTimelineCollapsed: boolean;
  isCommentCollapsed: boolean = true;
  isCommentCollapsed1: boolean = true;
  isCommentCollapsed2: boolean = true;
  activitycard: boolean = true;
  isFull: boolean;
  isFull1: any;
  public Editor = ClassicEditor;
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
