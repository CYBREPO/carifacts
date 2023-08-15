import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { HttpService } from 'src/app/service/http.service';
import { Location } from '@angular/common'

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
  nestedSubMenus: any;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute,
    private router: Router, private location: Location) {

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
      if (res['success']) {
        this.data = res['data'];
        if (this.data && this.data.has_submenu == "Yes") {
          this.subMenus = res['submenus'];
          const subMenu = this.subMenus.find(m => m.title.toLowerCase() == 'associate countries');
          if (subMenu) {
            this.httpService.httpGet(ApiUrls.banner.getMenus + "/" + subMenu.id, null).subscribe((res: any) => {
              if (res['success']) {
                this.nestedSubMenus = res;
              }
            });
          }

        }
      }
    })
  }

  parentEventHandlerFunction(submenu: any) {
    if (this.data?.title == "Countries of Caribean community") {
      this.router.navigate(['component/category', submenu.id]);
    }
    else if (this.data && this.data.has_submenu == "Yes") {
      this.router.navigate(['component/subDetails', submenu.id]);
    }
    else {
      this.router.navigate(['component/details', submenu.id]);
    }

  }

  back() {
    this.location.back();
  }

  showinformation(submenu: any) {
    this.router.navigate(['grade/sub/', submenu.id])
  }
}
// parentEventHandlerFunctiontwo() {
//   this.router.navigate(['component/associate-states']);
// }
