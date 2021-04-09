import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import {UserService} from '../../../../shared/service/users/user.service';
import {roles, User} from '../../../../shared/Model/user';
@Component({
  selector: 'app-hr-users',
  templateUrl: './hr-users.component.html',
  styleUrls: ['./hr-users.component.scss']
})
export class HrUsersComponent implements OnInit {

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
  validPermssion;
  user1:User[] | null=null;
  constructor(private  userService:UserService) { }

  ngOnInit( ): void {
    this.getAllUser();
  }
  getAllUser(){
    this.userService.getAllusers().subscribe(resp=>{
      this.ListUsers=resp;

      this.user=this.ListUsers; this.ListUsers ? this.ListUsers : [];
      console.log(this.user[1].roles);

    })
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
    this.userService.update({ ...user, actived: b }).subscribe(()=>{
      this.getAllUser();

    })


  }
// ajouter un utilisateur par un administrateur
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
    }if(value.ADMIN == false && value.USER == false){
      document.getElementById('permission').style.border="1px solid #ff0000";
      this.validPermssion =false;
    }else{
      this.validPermssion = true;
      document.getElementById('permission').style.border="1px solid ";
    }
    if (this.validUsername && this.validEmail && this.validNom && this.validPrenom && this.validNumTel && this.validPassword && this.validRepass && this.validPermssion )
    {
      this.onTab(1);
      Swal.fire(
        'Utilisateur ajouté !',
        value.nom+' a été ajouté à la liste des utilisateurs',
        'success'
      )

      // this.user1=value;
      // if(value.ADMIN){
      //   let r1:roles;
      //   r1.roleName="ADMIN";
      //   this.user1.
      // }
      // if(value.USER){
      //   let r2:roles;
      //   r2.roleName="USER";
      //   roles.push(r2);
      // }

     // this.userService.adduser({ ...(this.user1),  }).subscribe(resp=>{

    //})
    }
  }
}
