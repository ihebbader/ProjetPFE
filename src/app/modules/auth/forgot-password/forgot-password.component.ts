import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import {AuthServiceService} from '../../../shared/service/Auth/auth-service.service';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: false } }
  ]
})
export class ForgotPasswordComponent implements OnInit {
  username;
  validUsername;
  messagee;
  alerte =false;
  onclicksucc: boolean = true;
  constructor(private authService:AuthServiceService,
              private Notification: NotificationsService) { }

  ngOnInit(): void {
  }
  onReset(){
    let user={"username":this.username};
    if(this.validUsername){
      this.authService.existUser(user).subscribe(resp=>{
        console.log(resp.body);
        if(!resp.body){

          this.alerte=true;
          this.messagee="Cette nom d'utilisateur n'existe pas";
          this.validUsername=false;
          return;
        }else{
          this.alerte=false;
          this.messagee="Merci de vérifier que vous avez recu un e-mail avec un lien";
          this.onSuccess(this.messagee);
          this.onclicksucc=false;
          this.authService.DemandeReset(this.username).subscribe(resp=>{
          },error => {

          })
        }
      })
    }
  }
onUsernameValid(){
    console.log(this.username)
    if(this.username.length<3){
      this.validUsername = false;
    }else{
      this.validUsername = true ;
      console.log(this.validUsername)
    }
}
  onSuccess(message) {
    this.Notification.success('Succés', message, {
      position: ['top', 'right'],
      timeOut: 4000,
      animate: 'fade',
      showProgressBar: true
    });
  }
}
