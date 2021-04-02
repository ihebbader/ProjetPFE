import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-hr-users',
  templateUrl: './hr-users.component.html',
  styleUrls: ['./hr-users.component.scss']
})
export class HrUsersComponent implements OnInit {

  contactTab: boolean;
  chatTab: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onTab(number) {
    this.chatTab = false;
    this.contactTab = false;
    if (number == '1') {
      this.chatTab = true;
    }
    else if (number == '2') {
      this.contactTab = true;
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

}
