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
  gradesixKeys: Array<any> = ['antigua', 'pillar', 'organs', 'symbols', 'founding', 'howcaricomworks',
    'dates', 'csme', 'institution', 'secretaries', 'award', 'Health'];

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
      if (res['success']) {
        this.data = res['data'];
        this.subMenus = res['submenus'];
        for (let i = 0; i < this.subMenus.length; i++) {
          this.subMenus[i]['tab'] = this.gradesixKeys[i];
        }
      }
    })
  }

  showinformation(submenu: any) {
    // this.addclassreduceheight = true;
    
    this.router.navigate(['grade/sub/',submenu.id])
    
  }

  back(){
    this.location.back();
  }
}
