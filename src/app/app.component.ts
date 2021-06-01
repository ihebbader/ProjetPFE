import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { ChatComponent } from './modules/client/chat/chat.component';
import {interval, Subscription} from 'rxjs';
import {UserService} from './shared/service/users/user.service';
import {AppUser} from './shared/Model/AppUser';
import {UserNotification} from './shared/Model/user-notification';
import {NotificationsService} from 'angular2-notifications';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Epic';
  greenClass: any;
  orageClass: boolean;
  blushClass: boolean;
  cyanClass: boolean = true;
  timberClass: boolean;
  blueClass: boolean;
  amethystClass: boolean;
  mySub: Subscription;
  notification:UserNotification[] | null=null;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
              private  UserService:UserService,
              private Notification1:NotificationsService) {
    this.mySub = interval(8000).subscribe((func => {
    this.getNotification();
    }))
  }
  ngOnInit(): void {
   /* if(localStorage.getItem('token') == null){
      this.router.navigateByUrl('/login')
    }*/
    sessionStorage.setItem("MinSideClass", "");
    sessionStorage.setItem("HeaderClass", "top_dark");
    sessionStorage.setItem("Font1", "font-montserrat");
    sessionStorage.setItem("MenuIcon", "list-a");
    sessionStorage.setItem("Toggle", "");
    sessionStorage.setItem("Toggle2", "");
    sessionStorage.setItem("Toggle3", "true");
    sessionStorage.setItem("Toggle4", "");
    sessionStorage.setItem("Toggle5", "");
    sessionStorage.setItem("Toggle6", "");
    sessionStorage.setItem("Toggle7", "");
    sessionStorage.setItem("Toggle8", "");
    sessionStorage.setItem("Toggle9", "");
    sessionStorage.setItem("Toggle10", "");

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
      .subscribe(() => {

        var rt = this.getChild(this.activatedRoute)

        rt.data.subscribe(data => {
          this.titleService.setTitle(data.title)
        })
      });


    setTimeout(() => {

      document.getElementsByClassName('page-loader-wrapper')[0].classList.add("HideDiv");

    }, 1000);
  }

  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }

  }
  toggleThemeSetting() {
    const className = document.getElementsByClassName('themesetting')[0];
    className.classList.toggle('open');
  }

ListNotification;
  getNotification(){
    console.log("aaaaaaaa")
    if(localStorage.getItem("token") == null  ){
   //   this.router.navigateByUrl("/");
     
    }else {
      this.UserService.getNotification().subscribe(resp => {
        this.ListNotification = resp;
        this.notification = this.ListNotification;
        this.ListNotification ? this.ListNotification : [];
        if (this.notification.length != 0){
        this.notification.forEach(notification => {
          console.log(this.notification)
          this.onSuccess(notification.notificationMessage);
        })
        }
      })
    }
  }
  closeMenu() {
    document.getElementsByClassName('right_sidebar')[0].classList.remove("open");
    document.getElementsByClassName('user_div')[0].classList.remove("open");
    document.getElementsByClassName('overlay')[0].classList.remove("open");
  }
  onSuccess(message){
    this.Notification1.info('Notification',message,{
      position: ['top','right'],
      timeOut:10000,
      animate: 'fade',
      showProgressBar:true
    });
  }
}
