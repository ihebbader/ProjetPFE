import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthServiceService} from '../../../shared/service/Auth/auth-service.service';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-chage-password',
  templateUrl: './chage-password.component.html',
  styleUrls: ['./chage-password.component.scss']
})
export class ChagePasswordComponent implements OnInit {
  password: any;
  validUsername: Boolean;
  onclickSuccess: boolean=true;
  message: string;

  constructor(private router: ActivatedRoute, private routes: Router, private authService: AuthServiceService,

  private Notification: NotificationsService
) {
}

ngOnInit()
:
void {}

onReset()
{
  if (this.validUsername) {
    this.router.queryParams.subscribe((param: Params) => {
      let token = param.token;
      let form = {
        "password": this.password,
        "token": token
      }
      this.authService.changepassword(form).subscribe(rep => {
        this.onclickSuccess=false;
        this.message="Votre mot de passe a été changé avec succés ! Vous pouvez maintenant vous connecter"
        this.onSuccess("Votre mot de passe a été changé avec succés !");

      })
    })
  }
}

onUsernameValid()
{
  if (this.password.length < 8) {
    this.validUsername = false;
  } else {
    this.validUsername = true;
  }
}
onSuccess(message){
  this.Notification.success('Opération terminé !', message, {
    position: ['top', 'right'],
    timeOut: 4000,
    animate: 'fade',
    showProgressBar: true
  });
}
}
