import { Component } from '@angular/core';
import { vehicleModels } from 'src/app/constants/constant';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  vehicleModels = vehicleModels.vehicleModels;
}
