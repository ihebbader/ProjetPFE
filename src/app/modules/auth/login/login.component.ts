import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import {AuthServiceService} from '../../../shared/service/Auth/auth-service.service';
import {Router} from '@angular/router';
import {NotificationsService} from 'angular2-notifications';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: false } }
  ]
})
export class LoginComponent implements OnInit {
Error= false;
message;
user;
disabled=false;

  constructor(
    private authService:AuthServiceService,
    private router:Router,
    private Notification:NotificationsService
  ) {

  }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
      localStorage.removeItem('token');
    }

  }
ErrorMessage=false;

  onConnect(value: any) {
    console.log(value);
    if(value.username.length < 3 ){
      document.getElementById('username').style.border="1px solid #ff0000";
      this.Error=true;
      this.message="le nom d'utilisateur introduit est invalide";
      return;
    }else{
      document.getElementById('username').style.border="";
      this.Error=false;
    this.authService.login(value).subscribe(resp=>{
      let jwt='Bearer '+resp.headers.get('Authorization');
      this.authService.saveToken(jwt);
      this.authService.getUser().subscribe(resp1=>{
         this.user=resp1;
         console.log(this.user)
        if( this.user.actived == false){
          console.log("samir") ;
          this.ErrorMessage=true;
          this.disabled=true;
          this.message="Bonjour "+this.user.username+" votre compte est encore désactivé !";
          localStorage.removeItem('token');
          return;
        }else {
if(this.authService.IsRoleSuperviseur()){
  this.router.navigateByUrl("/SuperVisor")
}else
          this.router.navigateByUrl("/Dashboard-Admin");
          this.onSuccess("Opération Reussite! Vous etes maintenant connecter !")
        }
      },error => {
      })

    },error => {
      this.onError("Nom d'utilisateur ou mot de passe invalide !")

    })
    }

  }
  onSuccess(message){
    this.Notification.success('Succés',message,{
      position: ['top','right'],
      timeOut:4000,
      animate: 'fade',
      showProgressBar:true
    });
  }
  onError(message){
    this.Notification.error('Erreur',message,{
      position: ['top','right'],
      timeOut:4000,
      animate: 'fade',
      showProgressBar:true
    });
  }
}
