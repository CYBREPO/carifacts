import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {

  id: number = 0;
  isSubMenu: boolean = false;
  data: any;
  subMenus: Array<any> = [];

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.activatedRoute.params.subscribe((param) => {
      this.id = param['id'];
      // if (param['submenu'] == "Yes")
      //   this.getSubMenus();

    });
  }

  ngOnInit(): void {
    this.getMenusDetails();
  }

  getSubMenus() {
    this.httpService.httpGet(ApiUrls.banner.getMenus + "/" + this.id, null).subscribe((res: any) => {
      console.log('getSubMenus', res);
    })
  }

  getMenusDetails() {
    this.httpService.httpGet(ApiUrls.banner.getMenus + "/" + this.id, null).subscribe((res: any) => {
      if(res['success']){
        this.data = res['data'];
        if(this.data && this.data.has_submenu == "Yes"){
          this.subMenus = res['submenus'];
        }
      }
    })
  }

  parentEventHandlerFunction() {
    this.router.navigate(['component/category']);
  }
  parentEventHandlerFunctiontwo() {
    this.router.navigate(['component/associate-states']);
  }
}
