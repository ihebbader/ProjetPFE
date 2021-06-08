import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SatatisticService {

  private host = "http://localhost:8080";
  constructor(private router: Router, private http: HttpClient) { }
  getStat() {
    return this.http.get(this.host + "/getStatistic", {headers: {'Authorization': localStorage.getItem("token")}});
  }
}
