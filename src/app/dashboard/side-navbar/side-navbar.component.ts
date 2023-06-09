import { Component } from '@angular/core';
import { IUser } from 'src/app/interface/userInterface';
import { UserInfoService } from 'src/app/service/user-info.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {

  user: IUser;

  constructor(private userInforService: UserInfoService) { }

  ngOnInit() {
    this.user = this.userInforService.getLoggedInUser();
  }
}
