import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private host="http://localhost:8080"
  private DecodeToken;
  private roleUser;
  helper=new JwtHelperService();
  constructor(private http:HttpClient) { }
  login(user){

    return this.http.post(this.host+"/login",user,{observe:'response'});
  }
  saveToken(jwt){
    localStorage.setItem('token',jwt);
    this.DecodeToken=this.helper.decodeToken(jwt);
    this.roleUser=this.DecodeToken.roles;
  }
  logout(){
    localStorage.removeItem('token');
  }
  IsRoleAdmin(){
    for(let r of this.roleUser){
      if(r=='ADMIN'){
        return true
      } else return false;
    }
  }
  getUser(){
    console.log(this.DecodeToken);
    return this.http.post(this.host+"/getuser",this.DecodeToken.sub,{headers:{'Authorization':localStorage.getItem('token')}});
  }
}