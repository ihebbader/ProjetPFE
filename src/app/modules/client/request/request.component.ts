import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../shared/service/users/user.service';
import {AppUser} from '../../../shared/Model/AppUser';
import {Request} from '../../../shared/Model/request';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
ListRequest
  Request:Request[] | null=null;

  constructor(private UserService:UserService) { }

  ngOnInit(): void {
  this.getRequest()
  }
  getRequest(){
    this.UserService.getDisabledAccount().subscribe(resp=>{
      console.log(resp);
      this.ListRequest=resp;
      this.Request=this.ListRequest; this.ListRequest ? this.ListRequest : [];
    })
  }

}
