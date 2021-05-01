import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CONSTRUCTOR} from '@angular/compiler-cli/ngcc/src/host/esm2015_host';

@Injectable({
  providedIn: 'root'
})
export class DatamodelService {
  private host = "http://localhost:8080/";
  constructor(private http:HttpClient) { }
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
}
