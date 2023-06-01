import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { locations, vehicleModels } from 'src/app/constants/constant';
import { DataTransferService } from 'src/app/service/data-transfer.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  vehicleModels: any;
  // = vehicleModels.vehicleModels;
  locations = locations.locations;

  constructor(private router: Router, private datatransferService: DataTransferService,
    private httpservice: HttpService) { }

  ngOnInit() {
    this.getBrands();
  }

  getBrands() {
    this.httpservice.httpPost(ApiUrls.brand.getAllBrands, null).subscribe(res => {
      this.vehicleModels = res;
    });
  }

  valueEmittedFromChildComponent: any;


  parentEventHandlerFunction(event: any) {
    // this.datatransferService.setData(event);
    this.router.navigate(['/cust/carcategory',event.name]);
  }
}
