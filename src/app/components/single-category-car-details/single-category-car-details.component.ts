import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataTransferService } from 'src/app/service/data-transfer.service';
@Component({
  selector: 'app-single-category-car-details',
  templateUrl: './single-category-car-details.component.html',
  styleUrls: ['./single-category-car-details.component.scss']
})
export class SingleCategoryCarDetailsComponent {

  cardetails:any;


  constructor(private router: Router, private datatransferService: DataTransferService) { }

  
  ngOnInit(): void {
    this.cardetails = this.datatransferService.getData();
  }

  parentEventHandlerFunction(event: any) {
    this.datatransferService.setData(event);
    this.router.navigate(['/comp/cardetails'])
  }
}



