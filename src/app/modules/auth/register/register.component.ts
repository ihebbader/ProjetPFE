import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import {AuthServiceService} from '../../../shared/service/Auth/auth-service.service';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: false } }
  ]
})
export class RegisterComponent implements OnInit {
  password="";
  public barLabel: string = "Password strength:";
  checkUsername;
  checkEmail;
  checkPassword
  checkIsCheked;
  message: any;
  alerte=false;
  onSuccessClick: boolean;





  constructor(private authService:AuthServiceService,
              private Notification:NotificationsService) { }

  ngOnInit(): void {

  }

  onCreate(value: any) {
 this.check(value);

    if(this.checkUsername && this.checkEmail && this.checkPassword && this.checkIsCheked){
    this.authService.existUser(value).subscribe(resp=>{
      if(resp.body){
        this.alerte=true;
        this.message="Cette nom d'utilisateur existe déja !";
        this.checkUsername=false;
        return;
      }else{
        this.alerte=false;
        this.onSuccessClick=true;
        this.message=" Inscription effectué !,Votre demande sera traiter par un administrateur au bout de 48 heure ! ";
        let users={
          "username": value.username,
          "email":value.email,
          "password":this.password,
        };
        this.message="Inscription effectué !,Votre demande sera traiter par un administrateur au bout de 48 heure !";
        this.onSuccess(this.message);
        this.authService.register(users).subscribe(resp=>{

        })
      }
    })
        }
  }

  check(value) {
    let username =value.username;
    let email = value.email;
    let check =value.check;
    console.log(check);
    if(username.length <3 ){
      this.checkUsername=false;
    }else{
      this.checkUsername=true;
    }
    if(!this.ValidateEmail(email)){
    this.checkEmail=false;
    }else{
      this.checkEmail=true;
    }
    if(this.password.length<8){
      this.checkPassword=false ;
    }else {
      this.checkPassword=true;
    }
    if(check  ==false){
      this.checkIsCheked=false;
    }else{
      this.checkIsCheked=true;
    }
  }

  ValidateEmail(mail)
  {
    if ( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
    {
      return true
    }
    return false;
  }
  onSuccess(message){
    this.Notification.success('Inscription',message,{
      position: ['top','right'],
      timeOut:6000,
      animate: 'fade',
      showProgressBar:true
    });
  }
}
