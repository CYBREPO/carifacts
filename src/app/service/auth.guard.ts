import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoService } from './user-info.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private userInfoService: UserInfoService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const user = this.userInfoService.getLoggedInUser();
    if(user == null || user == undefined){
      this.router.navigate(['/account/login'],{ queryParams: { returnUrl: state.url } });
      return false;
    }
    if(user.isAdmin == null || user.isAdmin == undefined || user.isAdmin == false){
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
  
}
