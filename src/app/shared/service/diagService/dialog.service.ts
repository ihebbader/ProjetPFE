import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import{ChangePasswordComponent} from '../../../modules/client/profile/change-password/change-password.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog:MatDialog) { }
  openConfirmDialog(username){
    return this.dialog.open(ChangePasswordComponent,{
      width: '400px',
      panelClass:'confirm-dialog-container',
      disableClose:true,
      data:{
        username :username
      }
    });
  }

}
