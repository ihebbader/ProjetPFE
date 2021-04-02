import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-jobportal-positions',
  templateUrl: './jobportal-positions.component.html',
  styleUrls: ['./jobportal-positions.component.scss']
})
export class JobportalPositionsComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit() {
    this.dropdownList = [
      { id: 1, label: 'Mumbai' },
      { id: 2, label: 'Bangaluru' },
      { id: 3, label: 'Pune' },
      { id: 4, label: 'Navsari' },
      { id: 5, label: 'New Delhi' }
    ];
    this.selectedItems = [
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'label',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}