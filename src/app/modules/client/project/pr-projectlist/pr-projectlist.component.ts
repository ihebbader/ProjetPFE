import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pr-projectlist',
  templateUrl: './pr-projectlist.component.html',
  styleUrls: ['./pr-projectlist.component.scss']
})
export class PrProjectlistComponent implements OnInit {
  dpgridTab: boolean;
  dplistTab: boolean = true;
  isCollapsed1 = false;
  isCollapsed2 = false;
  isCollapsed3 = false;
  isCollapsed4 = false;
  isCollapsed5 = false;
  isCollapsed6 = false;
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
