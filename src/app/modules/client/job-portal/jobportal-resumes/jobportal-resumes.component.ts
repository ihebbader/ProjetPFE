import { Component, OnInit, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';

@Component({
  selector: 'app-jobportal-resumes',
  templateUrl: './jobportal-resumes.component.html',
  styleUrls: ['./jobportal-resumes.component.scss']
})
export class JobportalResumesComponent implements OnInit {
  Gridview: boolean;
  List: boolean = true;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit() {
    this.dropdownList = [
      { id: 1, label: '$0 - $50' },
      { id: 2, label: '$50 - $100' },
      { id: 3, label: '$100 - $200' },
      { id: 4, label: '$200 - $500' },
      { id: 5, label: '$500 +' }
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
  onTab(number) {
    this.List = false;
    this.Gridview = false;


    if (number == '1') {
      this.List = true;
    }
    else if (number == '2') {
      this.Gridview = true;
    }
  }
}
