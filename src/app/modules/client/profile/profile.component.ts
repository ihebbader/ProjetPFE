import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../../../shared/service/Auth/auth-service.service';
import {AppUser} from '../../../shared/Model/AppUser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../shared/service/users/user.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {DialogService} from '../../../shared/service/diagService/dialog.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  cardremove1: boolean = true;
  cardremove2: boolean = true;
  cardremove3: boolean = true;
  CalenderTab: boolean = true;
  TimelineTab: boolean;
  ProfileTab: boolean;
  BlogTab: boolean;
  isFull: boolean;
  isCommentCollapsed: boolean = true;
  isCommentCollapsed1: boolean = true;
  isCommentCollapsed2: boolean = true;
  isFull1: any;
  isFull2: any;
  private currentTime: number;



  onProfileChangeTab=false;
  editForm:FormGroup;
  currentFileUpload;  selectedFiles;
user:AppUser;
  image=true;
  constructor(private authService:AuthServiceService,private userService:UserService,
              private fb: FormBuilder,private router:Router,
              private dialogService:DialogService) {this.user=new AppUser();
    this.editForm=this.fb.group({
      username: ['',[Validators.required,Validators.maxLength(50),Validators.minLength(3)]],
      nom:['', [Validators.minLength(3),Validators.maxLength(30)]],
      prenom:['', [Validators.minLength(3),Validators.maxLength(30)]],
      email:['', [Validators.minLength(5),Validators.maxLength(250),Validators.email]],
      tel:['', [Validators.minLength(8),Validators.maxLength(8)]],
      sexe:['',[]],
      note:['', [Validators.minLength(3),Validators.maxLength(300)]],
      adresse:['', [Validators.minLength(3),Validators.maxLength(300)]],

    })}
  getTS() {
    return this.currentTime;
  }
  ngOnInit(): void {
    this.getUser();

  }
  public getUser(){
    this.authService.getUser().subscribe(resp=>{
      this.user=resp;

    })
  }

  CardRemoveTrans(number) {

    if (number == 1) {
      this.cardremove1 = false;
    }
    if (number == 2) {
      this.cardremove2 = false;
    }
    if (number == 3) {
      this.cardremove3 = false;
    }
  }
  onTab(number) {
    this.CalenderTab = false;
    this.TimelineTab = false;
    this.ProfileTab = false;
    this.BlogTab = false;

    if (number == '1') {
      this.CalenderTab = true;
    }
    else if (number == '2') {
      this.TimelineTab = true;
    }
    else if (number == '3') {
      this.ProfileTab = true;
    }
    else if (number == '4') {
      this.BlogTab = true;
    }
  }

  fullScreenSection(number) {
    if (number == 1) {
      if (this.isFull) {
        this.isFull = false;
      }
      else {
        this.isFull = true;
      }
    }
    if (number == 2) {
      if (this.isFull1) {
        this.isFull1 = false;
      }
      else {
        this.isFull1 = true;
      }
    }
    if (number == 3) {
      if (this.isFull2) {
        this.isFull2 = false;
      }
      else {
        this.isFull2 = true;
      }
    }
  }

  onProfileChange() {
    this.onProfileChangeTab=true;
    this.onTab("3");
    this.editForm.patchValue({
      username:this.user.username,
      nom:this.user.nom,
      prenom:this.user.prenom,
      email:this.user.email,
      sexe:this.user.sexe,
      tel:this.user.numTel,
      note:this.user.note,
      adresse:this.user.adresse,
    })
  }
  updateUser(user: AppUser): void {
    // user.id=this.CurrentlyUSerUpdated.id;
    user.username = this.editForm.get(['username'])!.value;
    user.nom = this.editForm.get(['nom'])!.value;
    user.prenom = this.editForm.get(['prenom'])!.value;
    user.numTel = this.editForm.get(['tel'])!.value;
    user.sexe = this.editForm.get(['sexe'])!.value;
    user.note = this.editForm.get(['note'])!.value;
    user.adresse = this.editForm.get(['adresse'])!.value;
  }


  onUpdateUser() {

    if(this.selectedFiles !=undefined){
      console.log(this.selectedFiles.item(0));
      this.currentFileUpload = this.selectedFiles.item(0);
    this.userService.uploadPhotoUser(this.currentFileUpload,this.user.id).subscribe(event=>{
      console.log("bader");
    })}
    this.updateUser(this.user);
    this.userService.update(this.user).subscribe(()=>{
      Swal.fire(
        'Opération Terminé !',
        this.user.nom+' a été modifier avec succées ! ',
        'success'
      )
      this.currentTime=Date.now();
      setTimeout(() => {
        setTimeout(() => {
          this.onTab("1")
          this.onProfileChangeTab=false;
        });
      }, 500);

    })
  }

  onSelectedFile(e) {
this.selectedFiles=e.files;
  }

  changePassword() {
    console.log(this.user.username)
    this.dialogService.openConfirmDialog(this.user.username).afterClosed().subscribe(resp=>{
      if(resp){
        Swal.fire(
          'Opération Terminé !',
          this.user.nom+' Mot de passe modifier avec succées  ',
          'success'
        )

      }
    })
  }
}
