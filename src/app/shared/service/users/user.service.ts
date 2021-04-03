import {Injectable, OnInit} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

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

  ngOnInit(): void {
    if (localStorage.getItem(("token")) == null ){
      this.router.navigateByUrl("/login");
    }
  }
}
