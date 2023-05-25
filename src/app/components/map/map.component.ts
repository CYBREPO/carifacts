import { Component } from '@angular/core';
import { vehicleModels } from 'src/app/constants/constant';
import { DataTransferService } from 'src/app/service/data-transfer.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  vehicleModels = vehicleModels.vehicleModels

  constructor(private dataTransferService: DataTransferService){}

  ngOnInit(){
    let selectedLocation = this.dataTransferService.getData();
    this.vehicleModels = vehicleModels.vehicleModels.filter(m => selectedLocation.modalIds.toString().includes(m.id));
  }
}
