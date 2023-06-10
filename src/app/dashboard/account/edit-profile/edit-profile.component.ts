import { Component,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { IUser } from 'src/app/interface/userInterface';
import { HttpService } from 'src/app/service/http.service';
import { UserInfoService } from 'src/app/service/user-info.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {

  file: File;
  profileForm: FormGroup;
  submitted: boolean = false;
  user: IUser;

  constructor(public dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private httpService: HttpService,
    private userInfoService: UserInfoService, private router: Router) { }

  ngOnInit() {
    this.user = this.userInfoService.getLoggedInUser();
    if (this.user == null) {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/account/login']);
    }
    this.initForm();
  }

  initForm() {
    this.profileForm = this.fb.group({
      name: [this.user.name ?? '', [Validators.required]],
      email: [this.user.email ?? '', [Validators.required]],
      profile: ['', []]
    });
  }

  handleFileInputProfile(event: any): void {
    this.file = event?.target?.files[0];
  }

  close(){
    this.dialogRef.close(null);
  }

  submit() {
    this.submitted = true;

    if (this.profileForm.invalid) return;

    let formData = new FormData();

    formData.append(`name`, this.profileForm.controls['name'].value);
    formData.append(`email`, this.profileForm.controls['email'].value);
    formData.append(`id`, this.user._id);
    formData.append(`profile`, this.file);

    this.httpService.httpPostFormData(ApiUrls.account.updateUser, formData).subscribe((res: any) => {
      this.dialogRef.close(res['data']);
    });
  }
}
