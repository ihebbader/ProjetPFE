import { Component, OnInit, TemplateRef } from '@angular/core';
import Swal from 'sweetalert2'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {UserService} from '../../../../shared/service/users/user.service';
import {AppUser} from '../../../../shared/Model/AppUser';
import {FormBuilder, Validators} from '@angular/forms';
import {Group} from '../../../../shared/Model/group';
@Component({
  selector: 'app-hr-employee',
  templateUrl: './hr-employee.component.html',
  styleUrls: ['./hr-employee.component.scss']
})
export class HrEmployeeComponent implements OnInit {
  ListUsers;
  user:AppUser[] | null=null;
  EmpViewTab: boolean;
  EmpAllTab: boolean = true;
  EmpLeaveTab: boolean;
  isStaticticsCollapsed: boolean;
  staticscard: boolean = true;
  modalRef: BsModalRef;
  users:AppUser[];
  createModel: any;
  CreatedGroup:Group;
  constructor(private modalService: BsModalService, private  UserService:UserService, private fb: FormBuilder) {
    this.createModel=this.fb.group({
      nom:['', [Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      description:['', [Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
    })
    this.CreatedGroup=new Group();
    this.users=[];



  }
  getAllGroupUser(){
    this.UserService.getAllGroupOfUser().subscribe(resp=>{
      console.log(resp);
    })
  }

  ngOnInit(): void {
this.getAllUser();
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
    this.users=[];
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-md' })
    );
  }
  AddModal1(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,{class:'modal-lg'}
    );
  }
getAllUser(){
    this.UserService.getAllusers().subscribe(resp=>{
      console.log(resp);
      this.ListUsers=resp;
      this.user=this.ListUsers; this.ListUsers ? this.ListUsers : [];
    })
}

  checkCheckBoxValue(event,u) {
    if(event.target.checked){
        this.users.push(u);
    }else {
        this.users.splice(this.users.indexOf(u));

    }
  }

  addGroup() {
    this.CreatedGroup.nom = this.createModel.get(['nom'])!.value;
    this.CreatedGroup.description = this.createModel.get(['description'])!.value;
    this.CreatedGroup.appUsers = this.users;
    console.log(this.CreatedGroup);
    if (this.createModel.get('nom')?.errors?.required || this.createModel.get('description')?.errors?.required || this.users.length == 0) {
      return
    } else {
      this.UserService.addNewGroup(this.CreatedGroup).subscribe(resp => {
        Swal.fire(
          'Opération terminé!',
          'Cette flux de travail a été  ajouté avec succées ',
          'success'
        )

      })
    }
    this.modalRef.hide();
  }

}
