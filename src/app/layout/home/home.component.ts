import { Component } from '@angular/core';
import { locations, vehicleModels } from 'src/app/constants/constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  vehicleModels = vehicleModels.vehicleModels;
  locations = locations.locations;

  
}
