import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../shared/service/users/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss']
})
export class HrDashboardComponent implements OnInit {
 username;
 Users:any;
 NbreUsersNotActived:number=0;
 NbreUsers:number=0;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("token") == null){
      this.router.navigateByUrl("/login");
    }
   this.getUtilisateur();
   this.getUsers()
  }
  getUtilisateur(){
   this.username=this.userService.getUserUsername();
   this.getUsers();
  }

  getUsers(){
    this.userService.getusers().subscribe(resp=>{
    //  console.log(resp);
      this.Users = resp;
      for(let u of this.Users._embedded.appUsers){
        if(u.actived == 0  ){
          this.NbreUsersNotActived=this.NbreUsersNotActived+1;
        }
        this.NbreUsers=this.NbreUsers+1;
      }
    },error => {
      console.log(error)
    })
  }

  goToRequest() {
    window.open("http://localhost:4200/Request")
  }
}
