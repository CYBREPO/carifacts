import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { HttpService } from 'src/app/service/http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  id: string;
  data: any;


  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService, private location: Location) {
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
      }
    })
  }

  back() {
    this.location.back();
  }
}
