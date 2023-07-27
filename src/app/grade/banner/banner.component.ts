import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { HttpService } from 'src/app/service/http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{

  subMenus: Array<any> =[];
  data: any;
  id: number = 0;

  constructor(private httpservice: HttpService,private activatedRoute: ActivatedRoute,
    private router: Router,private location: Location){
    this.activatedRoute.params.subscribe((param) => {
      this.id = param['id'];
    })
  }

  ngOnInit(): void {
    this.getSubMenus();
  }

  getSubMenus() {
    this.httpservice.httpGet(ApiUrls.banner.getMenus + "/" + this.id, null).subscribe((res: any) => {
      console.log(this.id);
      if (res['success']) {
        this.data = res['data'];
        this.subMenus = res['submenus'];
        // Static code to get submenus of faculties by passing cxc id
        if(this.data?.title == 'Faculty of Facts (Tertiary Level)' || this.data?.id == 2)
        this.httpservice.httpGet(ApiUrls.banner.getMenus + "/2", null).subscribe((res: any) => {
          if (res['success']) {
            this.subMenus = res['submenus'];
          }
        });
      }
    })
  }

  showinformation(submenu: any) {
    // this.addclassreduceheight = true;
    let id = submenu.id;
    id = submenu.id == 36 ? 5 : submenu.id == 78 ? 6 : submenu.id == 80 ? 7 : 
    submenu.id == 81 ? 12 : submenu.id == 82 ? 13 : submenu.id == 79 ? 10 : 
    submenu.id == 85 ? 9 : submenu.id == 86 ? 15 : submenu.id == 87 ? 8 : 
    submenu.id == 84 ? 14 : submenu.id ;
    
    this.router.navigate(['grade/sub/',id]);
    
  }

  back(){
    this.location.back();
  }
}
