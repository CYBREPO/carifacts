import { Component,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { IUser } from 'src/app/interface/userInterface';
import { HttpService } from 'src/app/service/http.service';
import { UserInfoService } from 'src/app/service/user-info.service';
import { CustomValidators } from 'src/app/validators/customvalidator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  changePasswordForm: FormGroup;
  submitted: boolean = false;
  user: IUser;

  constructor(public dialogRef: MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder, private httpService: HttpService,
    private userInfoService: UserInfoService, private router: Router) { }

  ngOnInit() {
    this.initForm();

    this.user = this.userInfoService.getLoggedInUser();
    if(this.user == null){
      localStorage.removeItem('currentUser');
      this.router.navigate(['/account/login']);
    }
  }

  initForm() {
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', []]
    });
  }

  get passFrm() { return this.changePasswordForm.controls }

  setConfirmPwdValidator() {
    this.changePasswordForm.controls['confirmPassword'].setValidators([Validators.required, CustomValidators.ConfirmPassword(m => this.matchPassword())]);
    this.changePasswordForm.controls['confirmPassword'].updateValueAndValidity();
  }

  matchPassword(): boolean {
    if (this.passFrm['confirmPassword'].value != '') {
      return this.passFrm['password'].value == this.passFrm['confirmPassword'].value;
    }
    else {
      return true;
    }
  }

  close(){
    this.dialogRef.close(null);
  }

  submit() {
    this.submitted = true;
    if (this.changePasswordForm.invalid) {
      return;
    }

    let param = {
      id: this.user._id,
      oldPassword: this.passFrm['oldPassword'].value,
      password: this.passFrm['password'].value, //crypto.SHA1(this.loginFrm['password'].value).toString()
    }

    this.httpService.httpPost(ApiUrls.account.updatePassword, param).subscribe((res: any) => {
      if (res['success']) {
      }
      this.dialogRef.close();
    });
  }
}
