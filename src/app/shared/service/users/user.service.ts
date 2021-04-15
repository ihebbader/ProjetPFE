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
    console.log(user)
    const req = new HttpRequest('PUT','http://localhost:8080/updateUser',user,{
      responseType: 'json',
      headers:new HttpHeaders({Authorization: `${localStorage.getItem('token')}`})
    });

    console.log("req"+req);
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

  //Sipprimer un utilisateur

  adduser(user){

    return this.http.post(this.host+"/adduser",user,{headers:{'Authorization':localStorage.getItem("token")}});
  }
  addRoles(user){
    return this.http.post(this.host+"/addroles",user,{headers:{'Authorization':localStorage.getItem("token")}});
  }
  delete(user){

    return this.http.post(this.host+"/delete",user,{headers:{'Authorization':localStorage.getItem("token")}});


  }
  ngOnInit(): void {
    if (localStorage.getItem(("token")) == null ){
      this.router.navigateByUrl("/login");

    }
  }

}
