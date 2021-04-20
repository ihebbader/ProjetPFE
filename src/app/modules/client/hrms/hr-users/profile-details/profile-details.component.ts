import { Component, OnInit } from '@angular/core';
import {User} from '../../../../../shared/Model/user';
import {ActivatedRoute, Params} from '@angular/router';
import {AuthServiceService} from '../../../../../shared/service/Auth/auth-service.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
user:User;
  constructor(private router: ActivatedRoute,private authService:AuthServiceService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.router.queryParams.subscribe((param: Params) => {
    let username = param.username;
    console.log(username);
    this.authService.getUserDetails(username).subscribe(resp=>{
      this.user=resp;
    })



  })

}
}
