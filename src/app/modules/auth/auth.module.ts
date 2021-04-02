import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ErrorPage2Component } from './error-page2/error-page2.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { JwtHelperService } from "@auth0/angular-jwt";
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    CarouselModule.forRoot(),
    FormsModule,
  ],
  declarations: [AuthRoutingModule.components, LoginComponent, ForgotPasswordComponent, RegisterComponent, ErrorPageComponent, ErrorPage2Component],
  providers: []
})
export class AuthModule {

  constructor() {
  }

}
