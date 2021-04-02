import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobportal-applicants',
  templateUrl: './jobportal-applicants.component.html',
  styleUrls: ['./jobportal-applicants.component.scss']
})
export class JobportalApplicantsComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit() {
    this.dropdownList = [
      { id: 1, label: 'New' },
      { id: 2, label: 'Contacted' },
      { id: 3, label: 'Interviewed' },
      { id: 4, label: 'Hired' }
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
