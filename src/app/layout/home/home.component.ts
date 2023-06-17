import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { locations, vehicleModels } from 'src/app/constants/constant';
import { DataTransferService } from 'src/app/service/data-transfer.service';
import { HttpService } from 'src/app/service/http.service';
import { ModalDialogService } from 'src/app/service/modal-dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  items :  Array <number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
  constructor(private router: Router, private datatransferService: DataTransferService,
    private httpservice: HttpService) { }

  ngOnInit() {

  }
  parentEventHandlerFunction() {
    this.router.navigate(['/cust/carcategory']);
  }
}
