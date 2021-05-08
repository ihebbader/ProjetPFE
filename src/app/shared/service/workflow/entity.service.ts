import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  private host = "http://localhost:8080/";

  constructor(private http :HttpClient) { }
  // test(test) {
  //   var json = JSON.stringify(test.components[0]);
  //   console.log(json)
  //   return this.http.post(this.host+"/test",json);
  // }
  saveProperty(test): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(test);
    console.log(body)
    return this.http.post(this.host+ 'saveP', body,{'headers':headers})
  }

  getAllProperty(){
    return this.http.get(this.host+ 'getAllProperty')

  }

  addEntityToData(id,entity){

    return this.http.post(this.host+'addNewEntity/'+id,entity,{headers:{'Authorization':localStorage.getItem("token")}})
  }
  DeleteEntityFromModel(id){
    return this.http.delete(this.host+'deleteEntity/'+id,{headers:{'Authorization':localStorage.getItem("token")}})
  }
}
