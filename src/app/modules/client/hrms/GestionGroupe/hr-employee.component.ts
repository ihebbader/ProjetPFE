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
  ListGroup:Group[] | null=null;
  ListUsers;
  groups;
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
  CurrentlyGroup:Group;
  UpdateModel: any;
  CurrentlyGroupUpdate:Group;
  constructor(private modalService: BsModalService, private  UserService:UserService, private fb: FormBuilder) {
    this.CurrentlyGroup=new Group();
    this.createModel=this.fb.group({
      nom:['', [Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      description:['', [Validators.required,Validators.minLength(3),Validators.maxLength(1000)]],
    })
    this.UpdateModel=this.fb.group({
      nom:['', [Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      description:['', [Validators.required,Validators.minLength(3),Validators.maxLength(1000)]],
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
this.getGroupList();
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

  sweettalert7(group) {
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
        this.deleteGroup(group)

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
    this.users=[];
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
    console.log(this.users)
  }
  getGroupList(){
    this.UserService.getAllGroupOfUser().subscribe(resp=>{
      this.groups=resp;
      this.ListGroup=this.groups; this.groups ? this.groups : [];
    })
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
          'groupe  ajouté avec succées ',
          'success'
        )
        this.modalRef.hide();
        this.getGroupList();
      })
    }
    this.modalRef.hide();
  }

  ListUser(group: Group) {
    this.CurrentlyGroup=group;
    this.onTab(3);
  }
  deleteUserFromGroup(user){
this.UserService.deleteUserFromGroup(user,this.CurrentlyGroup.id).subscribe(resp=>{
  Swal.fire(
    'Opération terminé!',
    'utilisateur retiré avec succés !',
    'success'
  )
  this.getGroupList();
  this.CurrentlyGroup.appUsers.splice(this.CurrentlyGroup.appUsers.indexOf(user),
    this.CurrentlyGroup.appUsers.indexOf(user));
})
  }
  deleteGroup(group){
    this.UserService.deleteGroup(group.id).subscribe(rep=>{
      this.getGroupList();
    })
  }

  updategroupe(group: Group,template: TemplateRef<any>) {
    this.CurrentlyGroupUpdate=group;
    this.AddModal1(template);
    this.UpdateModel.patchValue({
      nom:group.nom,
      description:group.description,
    })
  }
  onUpdateSubmit(){
    this.CurrentlyGroupUpdate.nom=this.UpdateModel.get(['nom'])!.value;
    this.CurrentlyGroupUpdate.description=this.UpdateModel.get(['description'])!.value;
    this.UserService.addNewGroup(this.CurrentlyGroupUpdate).subscribe(resp => {
      Swal.fire(
        'Opération terminé!',
        'Cette groupe a été  modifié avec succées ',
        'success'
      )
      this.modalRef.hide();
      this.getGroupList();
    })
  }
  onUserUpdate(){

    this.CurrentlyGroup.appUsers=this.users;
    this.UserService.addNewGroup(this.CurrentlyGroup).subscribe(resp => {
      Swal.fire(
        'Opération terminé!',
        'Cette flux de travail a été  modifie" avec succées ',
        'success'
      )
      this.modalRef.hide();
      this.getGroupList();

    })

  }

}
