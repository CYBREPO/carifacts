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

  items: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  countries: Array<string> = [
    'Antigua and Barbuda',
    'Bahamas',
    'Barbados',
    'Belize',
    'Dominica',
    'Grenada',
    'Guyana',
    'Haiti',
    'Jamaica',
    'Montserrat',
    'Saint Lucia',
    'St. Kitts and Nevis',
    'St. Vincent and the Grenadines',
    'Suriname',
    'Trinidad and Tobago']

  countryofcaricom: Array<any> = [

    {
      'id': '1',
      'country': 'Anguilla'
    },

    {
      'id': '2',
      'country':'Antigua and Barbuda'
    },

    {
      'id': '3',
      'country':'Bahamas'
    },

    {
      'id': '4',
      'country':'Barbados'
    },

    {
      'id': '5',
      'country':'Belize'
    },

    {
      'id': '6',
      'country':'Bermuda'
    },

    {
      'id': '7',
      'country':'British virgin island'
    },

    {
      'id': '8',
      'country':'cayman island'
    },

    {
      'id': '9',
      'country':'Domnica'
    },

    {
      'id': '10',
      'country': 'Grenada'
    },

    {
      'id': '11',
      'country': 'Guyana'
    },

    {
      'id': '12',
      'country': 'Haiti'
    },

    {
      'id': '13',
      'country': 'Jamaica'
    },

    {
      'id': '14',
      'country': 'Montserrat'
    },

    {
      'id': '15',
      'country': 'St. Kitts'
    },
    {
      'id': '15',
      'country': 'St. Vincent and the Grenadies'
    },
    {
      'id': '16',
      'country': 'Suriname'
    },
    {
      'id': '17',
      'country': 'Trinidade and Tobaggo'
    },
    {
      'id': '18',
      'country': 'Turks and Caicos'
    }
  ]

  constructor(private router: Router, private datatransferService: DataTransferService,
    private httpservice: HttpService) { }

  ngOnInit() {

  }
  parentEventHandlerFunction() {
    this.router.navigate(['/cust/carcategory']);
  }
}
