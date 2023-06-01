import { Component } from '@angular/core';
import { vehicleModels } from 'src/app/constants/constant';
import { DataTransferService } from 'src/app/service/data-transfer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { ApiUrls } from 'src/app/constants/apiRoutes';



interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  vehicleModels: any;
  // = vehicleModels.vehicleModels
  cardetails:any;
  searchedLocation: string;
  constructor(private router: Router, private datatransferService: DataTransferService,
    private activatedRoute:ActivatedRoute,private httpService:HttpService){
    activatedRoute.params.subscribe(res => {
      if(res['loc']){
        this.searchedLocation = res['loc'];
      }
    })
  }

  ngOnInit(){
    this.getLocationWiseData();
    // let selectedLocation = this.datatransferService.getData();
    // this.vehicleModels = vehicleModels.vehicleModels.filter(m => selectedLocation.modalIds.toString().includes(m.id));
  }

  getLocationWiseData(){
    let param = {
      address: this.searchedLocation
    }

    this.httpService.httpGet(ApiUrls.location.getLocationVechile,param).subscribe(res => {
      console.log(res)
      this.vehicleModels = res;
    });
  }

  parentEventHandlerFunction(event: any) {
    this.datatransferService.setData(event);
    this.router.navigate(['/cust/cardetails'])
  }

  
  foods: Food[] = [
    {value: 'low-to-high-0', viewValue: 'Price: low to high'},
    {value: 'high-to-low-1', viewValue: 'Price: high to low'},
    {value: 'relevance', viewValue: 'Relevance'},
  ];

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

}
