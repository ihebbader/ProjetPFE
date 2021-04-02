import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  dplistTab: boolean = true;

  dpgridTab: boolean;
  constructor() { }

  ngOnInit(): void {

  }
  onTab(number) {
    this.dplistTab = false;
    this.dpgridTab = false;
    if (number == '1') {
      this.dplistTab = true;
    }
    else if (number == '2') {
      this.dpgridTab = true;
    }
  }
}
