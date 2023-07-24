import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUrls } from 'src/app/constants/apiRoutes';

import { DataTransferService } from 'src/app/service/data-transfer.service';
import { HttpService } from 'src/app/service/http.service';
@Component({
  selector: 'app-single-category-car-details',
  templateUrl: './single-category-car-details.component.html',
  styleUrls: ['./single-category-car-details.component.scss']
})
export class SingleCategoryCarDetailsComponent {

  tabdetails: Array<string> = [
    'head of govt',
    'key facts',
    'national symbols',
    'map',
    'tourist attraction',
  ];
  id: string;
  data: any;


  constructor(private router: Router, private datatransferService: DataTransferService,
    private activatedRoute: ActivatedRoute, private httpService: HttpService) {
    activatedRoute.params.subscribe(param => {
      if (param['id']) {
        this.id = param['id'];
      }
    })
  }


  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(){
    this.httpService.httpGet(ApiUrls.banner.getMenus + '/' + this.id,null).subscribe((res:any) => {
      if(res['success']){
        this.data = res['data'];
      }
    })
  }
}



