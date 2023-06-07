import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  email: any;

  constructor(private httpService: HttpService, private router: Router){}

  resetPassword(){
    this.httpService.httpPost(ApiUrls.account.resetPassword,{email: this.email}).subscribe(res => {});
    // this.router.navigate(['/account/login']);
  }
}
