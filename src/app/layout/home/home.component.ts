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
  low: number = 0
  high: number = 5
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


  tabsoftabs: Array<any> = [
    {
      'tab': 'home',
      'tabtitle': 'Home'
    },
    {
      'tab': 'antigua',
      'tabtitle': 'Grade VI/Eleven Plus/Common Entrance'
    },
    {
      'tab': 'cxc',
      'tabtitle': 'CXC (Caribean Examination Council) CAPE (Caribbean Advanced)'
    },
    {
      'tab': 'faculty',
      'tabtitle': 'Faculty of Facts (Tertiary Level)'
    },
    {
      'tab': 'kyc',
      'tabtitle': 'Know your Caribbean'
    },




    {
      'tab': 'antigua',
      'tabtitle': 'Countries of Caribean community'
    },
    {
      'tab': 'pillar',
      'tabtitle': 'Pillars'
    },
    {
      'tab': 'organs',
      'tabtitle': 'Organs'
    },
    {
      'tab': 'symbols',
      'tabtitle': 'Symbol of caricom'
    },
    {
      'tab': 'founding',
      'tabtitle': 'Founding fathers'
    },
    {
      'tab': 'howcaricomworks',
      'tabtitle': 'How caricom works'
    },
    {
      'tab': 'dates',
      'tabtitle': 'Keys dates'
    },
    {
      'tab': 'csme',
      'tabtitle': 'CSME'
    },
    {
      'tab': 'institution',
      'tabtitle': 'Caricom Institution'
    },
    {
      'tab': 'secretaries',
      'tabtitle': 'Secretaries General'
    },
    {
      'tab': 'award',
      'tabtitle': 'Caricom Awardees'
    },
    {
      'tab': 'Health',
      'tabtitle': 'Grade 6 test result'
    }
  ]



  countryofcaricom: Array<any> = [



    {
      'id': '2',
      'country': 'Antigua and Barbuda'
    },

    {
      'id': '3',
      'country': 'Bahamas'
    },

    {
      'id': '4',
      'country': 'Barbados'
    },

    {
      'id': '5',
      'country': 'Belize'
    },
    {
      'id': '9',
      'country': 'Domnica'
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
      'id': '1',
      'country': 'Anguilla'

    },
    {
      'id': '6',
      'country': 'Bermuda'
    },

    {
      'id': '7',
      'country': 'British virgin island'
    },

    {
      'id': '8',
      'country': 'cayman island'
    },
    {
      'id': '18',
      'country': 'Turks and Caicos'
    },
  ]

  constructor(private router: Router, private datatransferService: DataTransferService,
    private httpservice: HttpService) { }

  ngOnInit() {
  }

  parentEventHandlerFunction() {
    this.router.navigate(['component/category']);
  }
  
  showothertabs(i: number) {
    if (i == 1) {
      this.low = 5;
      this.high = 16;
    }
  }
}
