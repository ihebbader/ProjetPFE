import { Component, OnInit, TemplateRef } from '@angular/core';
import Swal from 'sweetalert2'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-hr-employee',
  templateUrl: './hr-employee.component.html',
  styleUrls: ['./hr-employee.component.scss']
})
export class HrEmployeeComponent implements OnInit {
  EmpViewTab: boolean;
  EmpAllTab: boolean = true;
  EmpLeaveTab: boolean;
  isStaticticsCollapsed: boolean;
  staticscard: boolean = true;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  onTab(number) {
    this.EmpAllTab = false;
    this.EmpViewTab = false;
    this.EmpLeaveTab = false;

    if (number == '1') {
      this.EmpAllTab = true;
    }
    else if (number == '2') {
      this.EmpViewTab = true;
    }
    else if (number == '3') {
      this.EmpLeaveTab = true;
    }
  }

  sweettalert7() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonColor: "rgb(220, 53, 69)",
      confirmButtonText: 'Yes, delete it!',

    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  CardRemoveStatics() {
    this.staticscard = false;
  }

  AddModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-md' })
    );
  }

}
