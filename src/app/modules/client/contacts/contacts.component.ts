import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  addnewTab: boolean;
  gridTab: boolean;
  listTab: boolean = true;

  constructor() { }

  onTab(number) {
    this.listTab = false;
    this.gridTab = false;
    this.addnewTab = false;
    if (number == '1') {
      this.listTab = true;
    }
    else if (number == '2') {
      this.gridTab = true;
    }
    else if (number == '3') {
      this.addnewTab = true;
    }
  }
  ngOnInit(): void {
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

}
