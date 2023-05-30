import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { locations, vehicleModels } from 'src/app/constants/constant';
import { DataTransferService } from 'src/app/service/data-transfer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  vehicleModels = vehicleModels.vehicleModels;
  locations = locations.locations;

  constructor(private router: Router, private datatransferService: DataTransferService) { }

  valueEmittedFromChildComponent: any;


  parentEventHandlerFunction(event: any) {
    this.datatransferService.setData(event);
    this.router.navigate(['/comp/carcategory'])
  }
}
