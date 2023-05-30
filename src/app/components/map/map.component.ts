import { Component } from '@angular/core';
import { vehicleModels } from 'src/app/constants/constant';
import { DataTransferService } from 'src/app/service/data-transfer.service';
import { Router } from '@angular/router';

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
    this.router.navigate(['/comp/cardetails'])
  }
}
