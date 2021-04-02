import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {

    constructor(private router:Router) { }

    ngOnInit(

    ): void {
      if(localStorage.getItem('token') == null){
        this.router.navigateByUrl('/login')
      }
    }
    closeMenu() {
        const body = document.getElementsByTagName('body')[0].classList.remove("offcanvas-active");
    }
}
