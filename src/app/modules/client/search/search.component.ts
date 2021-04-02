import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  imageTab: boolean;
  videoTab: boolean;
  newsTab: boolean;
  AllTab: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  onTab(number) {
    this.imageTab = false;
    this.videoTab = false;
    this.newsTab = false;
    this.AllTab = false;
    if (number == '1') {
      this.AllTab = true;
    }
    else if (number == '2') {
      this.imageTab = true;
    }
    else if (number == '3') {
      this.videoTab = true;
    }
    else if (number == '4') {
      this.newsTab = true;
    }
    else if (number == '5') {
      this.newsTab = true;
    }
  }

}
