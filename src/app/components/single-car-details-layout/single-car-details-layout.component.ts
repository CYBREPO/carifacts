import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { DataTransferService } from 'src/app/service/data-transfer.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-single-car-details-layout',
  templateUrl: './single-car-details-layout.component.html',
  styleUrls: ['./single-car-details-layout.component.scss']
})
export class SingleCarDetailsLayoutComponent {
  cardetails: any;
  additionDtls: any;

  constructor(private router: Router, private datatransferService: DataTransferService,private httpService: HttpService) { }

  ngOnInit(): void {
    this.cardetails = this.datatransferService.getData();
    this.getAdditionalDetails();
  }

  getAdditionalDetails(){
    this.httpService.httpGet(ApiUrls.vehicle.getAdditionDetails + "?id=" + this.cardetails.vehicle._id,null).subscribe(res => {
      this.additionDtls = res;
    });
  }
  saveDate(){
    console.log('object');
  }
  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    console.log(dateRangeStart.value);
    console.log(dateRangeEnd.value);
  }
}
