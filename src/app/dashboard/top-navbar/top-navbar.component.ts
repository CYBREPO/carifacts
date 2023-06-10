import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interface/userInterface';
import { UserInfoService } from 'src/app/service/user-info.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent {

  user: IUser;

  constructor(private userInfoService: UserInfoService, private router: Router) { }

  ngOnInit() {
    this.user = this.userInfoService.getLoggedInUser();
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['account/login']);
  }
}
