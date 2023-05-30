import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from 'src/app/service/data-transfer.service';

@Component({
  selector: 'app-single-car-details-layout',
  templateUrl: './single-car-details-layout.component.html',
  styleUrls: ['./single-car-details-layout.component.scss']
})
export class SingleCarDetailsLayoutComponent {
  cardetails: any;

  constructor(private router: Router, private datatransferService: DataTransferService) { }

  ngOnInit(): void {
    this.cardetails = this.datatransferService.getData();
    console.log(this.cardetails);
  }

}
