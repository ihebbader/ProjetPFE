import {Injectable, OnInit} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{
  helper = new JwtHelperService();
  DecodeToken;
  UserUsername: String;
  private host = "http://localhost:8080";

  constructor(private router: Router, private http: HttpClient) {
    this.isAdmin1=false;
  }

  getUserUsername() {
    if (localStorage.getItem("token") == null) {
      this.router.navigateByUrl("/login");
    } else {
      this.DecodeToken = this.helper.decodeToken(localStorage.getItem("token"));
      this.UserUsername = this.DecodeToken.sub;
      console.log(this.DecodeToken)
      return this.UserUsername;
    }
  }

  getusers() {
    console.log(localStorage.getItem('token'));
    return this.http.get(this.host + "/appUsers", {headers: {'Authorization': localStorage.getItem("token")}});
  }
  // pour update un utilisateur
  update( user){

    const req = new HttpRequest('PUT','http://localhost:8080/updateUser',user,{
      responseType: 'json',
      headers:new HttpHeaders({Authorization: `${localStorage.getItem('token')}`})
    });

    return this.http.request(req);
  }
  //pour get tous les utilisateurs de l'application
  getAllusers() {
    console.log(localStorage.getItem('token'));
    return this.http.get(this.host + "/getusers", {headers: {'Authorization': localStorage.getItem("token")}});
  }
  FindByUsernameLike(username) {
    console.log(localStorage.getItem('token'));
    let user={'username':username};
    return this.http.post(this.host + "/searchByUsername",user,{headers: {'Authorization': localStorage.getItem("token")}});
  }
  changePass(username,password) {
    let form = {"password":password}
    return this.http.post(this.host + "/updateMotDePasse/"+username,form,{headers: {'Authorization': localStorage.getItem("token")}});
  }
  VerifyPass(username,password) {
    let form1 = {"password":password}
    return this.http.post(this.host + "/verifyPass/"+username,form1,{headers: {'Authorization': localStorage.getItem("token")}});
  }
  FindByEmailLike(username) {
    console.log(localStorage.getItem('token'));
    let user={'email':username};
    return this.http.post(this.host + "/searchByEmail",user,{headers: {'Authorization': localStorage.getItem("token")}});
  }

  //Sipprimer un utilisateur

  adduser(user){

    return this.http.post(this.host+"/adduser",user,{headers:{'Authorization':localStorage.getItem("token")}});
  }
  addRoles(user){
    return this.http.post(this.host+"/addroles",user,{headers:{'Authorization':localStorage.getItem("token")}});
  }
  addRoles2(user){
    return this.http.post(this.host+"/addroles2",user,{headers:{'Authorization':localStorage.getItem("token")}});
  }
  delete(user){

    return this.http.post(this.host+"/delete",user,{headers:{'Authorization':localStorage.getItem("token")}});


  }
  uploadPhotoUser(file:File,id){
    console.log(id);
    let formData : FormData=new FormData()  ;
    formData.append('file',file);
      return this.http.post(this.host+"/uploadPhoto/"+id,formData,{headers:{'Authorization':localStorage.getItem("token")}});


  }
  getPhotoUser(id){
    console.log(id);
    return this.http.get(this.host+"/photoUser/4",{headers:{'Authorization':localStorage.getItem("token")}});
  }
  getAllGroupOfUser(){
    return this.http.get(this.host+"/getAllGroup",{headers:{'Authorization':localStorage.getItem("token")}})
  }
  addNewGroup(g){
    return this.http.post(this.host+"/addGroup",g,{headers:{'Authorization':localStorage.getItem("token")}});

  }
  getNotification(){
    return this.http.get(this.host+"/getNotification",{headers:{'Authorization':localStorage.getItem("token")}})

  }
  getDisabledAccount(){
    return this.http.get(this.host+"/getDisabledAccount",{headers:{'Authorization':localStorage.getItem("token")}})
  }
  deleteUserFromGroup(user,id){
    return this.http.post(this.host+"/deleteUserFromGroup/"+id,user,{headers:{'Authorization':localStorage.getItem("token")}});
  }
  deleteGroup(id){
    return this.http.delete(this.host+"/deleteGroup/"+id,{headers:{'Authorization':localStorage.getItem("token")}});

  }
  getNotificationUser(){
    return this.http.get(this.host+"/getAllNotification",{headers:{'Authorization':localStorage.getItem("token")}});

  }
  ngOnInit(): void {
    if (localStorage.getItem(("token")) == null ){
      this.router.navigateByUrl("/login");

    }
  }
  isAdmin1:Boolean;

  NotAdminRedirect(){
  this.isAdmin();

  }
   isAdmin() {
     this.isAdmin1=false;
     this.DecodeToken = this.helper.decodeToken(localStorage.getItem("token"));
     this.DecodeToken.roles.forEach(r => {

       if (r=='ADMIN') {
         this.isAdmin1 = true;
       }
     })
     if (this.isAdmin1 == false) {
       console.log("bader")
       this.router.navigateByUrl("/error-404")
     }
   }

}
