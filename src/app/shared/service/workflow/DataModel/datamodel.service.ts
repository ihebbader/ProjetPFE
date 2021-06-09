import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CONSTRUCTOR} from '@angular/compiler-cli/ngcc/src/host/esm2015_host';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatamodelService {
  private host = "http://localhost:8080/";
  helper=new JwtHelperService();
  constructor(private http:HttpClient, private router:Router) { }
  getAllDataModel(){
    return this.http.get(this.host + "getAllModel", {headers: {'Authorization': localStorage.getItem("token")}});
  }
  CreateNew(w){
    console.log(JSON.stringify(w));
    return this.http.post(this.host + "createDataModel",w,{headers: {'Authorization': localStorage.getItem("token")}});
  }
  DeleteModel(w){
    return this.http.post(this.host + "deleteDataFlow",w,{headers: {'Authorization': localStorage.getItem("token")}});
  }
  updateModel(w){
    return this.http.put(this.host + "updateDataModel",w,{headers: {'Authorization': localStorage.getItem("token")}});
  }
getModelById(id){
    return this.http.get(this.host+'getModel/'+id,{headers: {'Authorization': localStorage.getItem("token")}})
}
//getUserWorkflowProject
  getUserWorkflowProject(){
    if(localStorage.getItem('token') == null){
      this.router.navigateByUrl('/')
    }
    let jwt =localStorage.getItem('token');
    let DecodeToken=this.helper.decodeToken(jwt);
    console.log(DecodeToken);
    return this.http.get(this.host+'getDataModleToDo/'+DecodeToken.sub,{headers: {'Authorization': localStorage.getItem("token")}})
  }
  getForSuper(){
    return this.http.get(this.host+'getAllForSuperVisor',{headers: {'Authorization': localStorage.getItem("token")}})
  }
}
