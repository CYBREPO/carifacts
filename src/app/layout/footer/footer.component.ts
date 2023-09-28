import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  gridData: Array<any> = [];

  constructor(private httpservice: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.getAllGrids();
  }
  getAllGrids() {
    this.httpservice.httpGet(ApiUrls.grid.getGrids, null).subscribe((res: any) => {
      if (res['success']) {
        this.gridData = res['data'];
        if (this.gridData) {
          this.gridData.map((m: any) => {
            m.gridSixImage = environment.url + m.gridSixImage;
            return m
          })
        }
      }
    })
  }

  navigateTo(event) {
    switch (event.title) {
      case "The CARIBBEAN COMMUNITY": this.router.navigate(['grade/banner/1']);
        break;
      case "CXC/CAPE": this.router.navigate(['grade/banner/2']);
        break;
      case "Faculty of Facts": this.router.navigate(['grade/banner/3']);
        break;
      case "Know Your Caribbean": this.router.navigate(['grade/banner/4']);
        break;
        default: break;
    }

  }
}
