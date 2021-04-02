import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-pr-ticketdetails',
  templateUrl: './pr-ticketdetails.component.html',
  styleUrls: ['./pr-ticketdetails.component.scss']
})
export class PrTicketdetailsComponent implements OnInit {
  tikitcard: boolean = true;
  tikitcard1: boolean = true;
  tikitcard2: boolean = true;
  isCommentCollapsed1 = true;
  isCommentCollapsed2 = true;
  isCommentCollapsed3 = true;
  constructor() { }
  public Editor = ClassicEditor;
  ngOnInit(): void {
  }
  CardRemoveTikit() {
    this.tikitcard = false;
  }
  CardRemoveTikit1() {
    this.tikitcard1 = false;
  }
  CardRemoveTikit2() {
    this.tikitcard2 = false;
  }
}
