import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import {UserService} from '../../../../shared/service/users/user.service';
import {roles, User} from '../../../../shared/Model/user';
import {AuthServiceService} from '../../../../shared/service/Auth/auth-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-hr-users',
  templateUrl: './hr-users.component.html',
  styleUrls: ['./hr-users.component.scss']
})
export class HrUsersComponent implements OnInit {
username;
  contactTab: boolean;
  chatTab: boolean = true;
  user:User[] | null=null;
  ListUsers;
  roles:any;
  validUsername=true;
  validEmail = true;
  validNom=true;
  validPrenom=true;
  validNumTel= true;
  validPassword=true;
  validRepass= true;
  alerte;
  updateUserForm=false;
  usernme: any;
  CurrentlyUSerUpdated:User=null;
  user1:User[] | null=null;
  //UpdatedUser:User | null=null;
  roleAdmin:roles;
  roleUser:roles;
  private message: string;
  editForm:FormGroup;

  constructor(private  userService:UserService,
              private authService:AuthServiceService,
              private fb: FormBuilder,
              private router:Router)
  {
    this.editForm=this.fb.group({
      username: ['',[Validators.required,Validators.maxLength(50),Validators.minLength(3)]],
      nom:['', [Validators.minLength(3),Validators.maxLength(30)]],
      prenom:['', [Validators.minLength(3),Validators.maxLength(30)]],
      email:['', [Validators.minLength(5),Validators.maxLength(250),Validators.email]],
      tel:['', [Validators.minLength(8),Validators.maxLength(8)]],
      sexe:['',[]],
      note:['', [Validators.minLength(3),Validators.maxLength(300)]],
      admin:['', ],
    })
  }

  ngOnInit( ): void {
    this.getAllUser();
    this.roleAdmin=new roles();
    this.roleAdmin.id=2;
   this.roleAdmin.roleName="ADMIN";
   this.roleUser=new roles();
   this.roleUser.id=1;
   this.roleUser.roleName="USER";

  }
  getAllUser(){
    this.userService.getAllusers().subscribe(resp=>{
      this.ListUsers=resp;

      this.user=this.ListUsers; this.ListUsers ? this.ListUsers : [];
      console.log(this.user[1].roles);

    })
  }
  onTab(number) {
    this.getAllUser();
    this.chatTab = false;
    this.contactTab = false;
    this.updateUserForm=false;
    if (number == '1') {
      this.chatTab = true;
    }
    else if (number == '2') {
      this.contactTab = true;
    }else if(number == '3'){
      this.updateUserForm=true;
    }
  }
// Supprimer un utilisateur
  DeleteUser(u) {
    Swal.fire({
      title: 'Supprimer utilisateur ',
      text: 'Vous etes sur du supprimer cette utilisateur ?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Annuler',
      confirmButtonColor: "rgb(220, 53, 69)",
      confirmButtonText: 'Oui, Supprimer',

    }).then((result) => {
      if (result.value) {
      this.userService.delete(u).subscribe(rep=>{
        this.getAllUser();
        Swal.fire(
          'Opération terminé!',
          'Cette utilisateur a ete supprimé avec succés',
          'success'
        )
      })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annuler',
          'Vous avez annulé cette opération !',
          'error'
        )
      }
    })
  }

  setActive(user:User, b: boolean) {
    if(b){
      this.error=false;
      this.success=true;
    }else{
      this.success=false;
      this.error=true;
    }
    this.userService.update({ ...user, actived: b }).subscribe(()=>{
      this.getAllUser();


    })
    setTimeout(() => {
      setTimeout(() => {
        this.success=false;
        this.error=false;
      });
    }, 6000);


  }
// ajouter un utilisateur par un administrateur
  success=false;
  error=false;
  onAddUser(value: any) {
    console.log(value);
    console.log(value.username.length);
    if(value.username.length <3){
      this.validUsername= false;
      console.log(this.validUsername);
    }else{
      this.validUsername=true;
    }
    if( !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.email))){
      this.validEmail=false;
    }else {
      this.validEmail=true;
    }if(value.nom.length!=0) {
      if (value.nom.length<3) {
        this.validNom = false;
      } else {
        this.validNom = true;
      }
    }else{
      this.validNom=true;
    }
    if(value.prenom.length!=0){
    if(value.prenom.length<3 || (/^[A-Za-z]+ [a-z]+/.test(value.prenom))){
      this.validPrenom=false;
    }else {
      this.validPrenom=true;
    }
    }else{
      this.validPrenom=true;
    }
    if(value.numTel.toString().length !=0){
    if(value.numTel.toString().length<8){
      this.validNumTel =false;

    }else {
      this.validNumTel=true;
    }}else{
      this.validNumTel=true;
    }
    if( value.password.length<8 || value.password != value.repass ){
      this.validPassword=false;
      this.validRepass=false;
    }else{
      this.validPassword=true;
      this.validRepass=true;
    }
    if (this.validUsername && this.validEmail && this.validNom && this.validPrenom && this.validNumTel && this.validPassword && this.validRepass )
    {
      this.authService.existUser(value).subscribe(resp=>{
        if(resp.body){
          this.alerte=true;
          this.message="Cette nom d'utilisateur existe déja !";
          this.validUsername=false;
          return;
        } else{

     this.userService.adduser(value).subscribe(resp=>{
       console.log(value.IsAdmin)
       if(value.IsAdmin){
         this.userService.addRoles(value).subscribe(()=>{

         })
       }
       Swal.fire(
         'Utilisateur ajouté !',
         value.nom+' a été ajouté à la liste des utilisateurs',
         'success'
       )
       setTimeout(() => {
         setTimeout(() => {
           this.onTab(1);
         });
       }, 500);
     })
    }})



    }
}

  UpdateUser(u: User) {
    this.CurrentlyUSerUpdated = u ;
    this.usernme=this.CurrentlyUSerUpdated.username;
    this.onTab(3);
    console.log(this.CurrentlyUSerUpdated);
    this.editForm.patchValue({
      username:this.CurrentlyUSerUpdated.username,
      nom:this.CurrentlyUSerUpdated.nom,
      prenom:this.CurrentlyUSerUpdated.prenom,
      email:this.CurrentlyUSerUpdated.email,
      sexe:this.CurrentlyUSerUpdated.sexe,
      tel:this.CurrentlyUSerUpdated.numTel,
      note:this.CurrentlyUSerUpdated.note,


    })
    this.editForm.get(['sexe'])!.setValue("Homme");
  }
  updateUser(user: User): void {
   // user.id=this.CurrentlyUSerUpdated.id;
    user.username = this.editForm.get(['username'])!.value;
    user.nom = this.editForm.get(['nom'])!.value;
    user.prenom = this.editForm.get(['prenom'])!.value;
    user.numTel = this.editForm.get(['tel'])!.value;
    user.sexe = this.editForm.get(['sexe'])!.value;
    user.note = this.editForm.get(['note'])!.value;
    if(this.editForm.get(['admin'])!.value){
      user.roles=[this.roleAdmin,this.roleUser];
    }else{
      user.roles=[this.roleUser];
    }

  }
  onUpdateUser() {

    console.log(this.editForm.get(['admin'])!.value);
 this.updateUser(this.CurrentlyUSerUpdated);
    console.log(this.CurrentlyUSerUpdated);
    this.userService.update(this.CurrentlyUSerUpdated).subscribe(()=>{
      Swal.fire(
        'Utilisateur Modifier !',
        this.CurrentlyUSerUpdated.nom+' a été modifier avec succées ! ',
        'success'
      )
      setTimeout(() => {
        setTimeout(() => {
          this.onTab(1);
        });
      }, 500);

    })
  }

  profile(u: User) {
    this.router.navigateByUrl("/profile");

  }

  search(value) {
    console.log(value)
    if(value.seleteds == "username" ){
    if(this.username== null||this.username=="" || this.username==undefined ){
      this.getAllUser();
    }else{
      this.userService.FindByUsernameLike(this.username).subscribe(resp=>{
        console.log(resp);
        this.ListUsers=resp;

        this.user=this.ListUsers; this.ListUsers ? this.ListUsers : [];
      })
    }}
  }
}
