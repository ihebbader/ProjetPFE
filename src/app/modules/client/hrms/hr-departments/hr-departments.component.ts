import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-hr-departments',
  templateUrl: './hr-departments.component.html',
  styleUrls: ['./hr-departments.component.scss']
})
export class HrDepartmentsComponent implements OnInit {
  dplistTab: boolean = true;
  dpgridTab: boolean;

  constructor(private modalService: BsModalService) { }
  modalRef: BsModalRef;
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
  AddModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-md' })
    );
  }
}
