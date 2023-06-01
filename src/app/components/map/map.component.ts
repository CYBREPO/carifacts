import { Component } from '@angular/core';
import { vehicleModels } from 'src/app/constants/constant';
import { DataTransferService } from 'src/app/service/data-transfer.service';
import { Router } from '@angular/router';



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
  vehicleModels = vehicleModels.vehicleModels
  cardetails:any;
  constructor(private router: Router, private datatransferService: DataTransferService){}

  ngOnInit(){
    let selectedLocation = this.datatransferService.getData();
    this.vehicleModels = vehicleModels.vehicleModels.filter(m => selectedLocation.modalIds.toString().includes(m.id));
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
