import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { Location } from '@angular/common';
import { ApiUrls } from 'src/app/constants/apiRoutes';


@Component({
  selector: 'app-submenus',
  templateUrl: './submenus.component.html',
  styleUrls: ['./submenus.component.scss']
})
export class SubmenusComponent {

  id: string;
  data: any;
  subMenus: Array<any> = [];


  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService, private location: Location,
    private router: Router) {
    this.activatedRoute.params.subscribe(param => {
      if (param['id']) {
        this.id = param['id'];
      }
    })
  }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.httpService.httpGet(ApiUrls.banner.getMenus + '/' + this.id, null).subscribe((res: any) => {
      if (res['success']) {
        this.data = res['data'];
        this.subMenus = res['submenus'];
      }
    })
  }

  parentEventHandlerFunction(submenu: any) {

    this.router.navigate(['component/details', submenu.id]);

  }

  back() {
    this.location.back();
  }
}
