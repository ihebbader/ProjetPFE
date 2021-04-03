import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ErrorPage2Component } from './error-page2/error-page2.component';
import {ChagePasswordComponent} from './chage-password/chage-password.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Authentification' }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: { title: 'Mot de passe oubliée' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Inscription' }
  },
  {
    path: 'error-404',
    component: ErrorPageComponent,
    data: { title: ':: Epic :: Error-404' }
  },
  {
    path: 'error-500',
    component: ErrorPage2Component,
    data: { title: ':: Epic :: Error-500' }
  },
  {
    path: 'resetPassword',
    component:ChagePasswordComponent ,
    data: { title: 'Changer mot de passe ' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
  static components = [
    LoginComponent,
    ForgotPasswordComponent
  ];

}
