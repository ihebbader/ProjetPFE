import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../shared/service/users/user.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  editForm: FormGroup;
  notEquals=false;
  validPassword =false;
  message;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
              public dialogRef: MatDialogRef<ChangePasswordComponent>,
              private fb:FormBuilder,
              private userService: UserService) {
    this.editForm=fb.group({
      password:['',[Validators.required]],
      newpassword:['',[Validators.required,Validators.minLength(8)]],
      newpasswordr:['',[Validators.required,Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close(false);
  }
  closeDialogEdit(tr) {
    this.dialogRef.close(tr);
  }
  OnChangPassword(){
    console.log(this.editForm.get('newpassword')?.errors?.required);
    if (this.editForm.get('newpassword')?.errors?.required || this.editForm.get('newpassword')?.errors?.minlength
        || this.editForm.get('newpasswordr')?.errors?.required || this.editForm.get('newpasswordr')?.errors?.minlength
        || this.editForm.get('newpassword')?.errors?.required){
      return ;
    }else if(this.data.username,this.editForm.get(['newpassword'])!.value != this.data.username,this.editForm.get(['newpasswordr'])!.value) {

    }
      this.userService.VerifyPass(this.data.username,this.editForm.get(['password'])!.value).subscribe(resp=>{
        console.log(resp)
        if(resp){
          console.log("aaaaaaaaaaaa");
          this.message="Mot de pass incorrecte";
          this.validPassword=true;
          return;
        }else{
          this.userService.changePass(this.data.username,this.editForm.get(['newpasswordr'])!.value).subscribe(resp=>{
            this.closeDialogEdit(true);
          })
        }
      })




  }

}
