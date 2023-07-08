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
  gradesixtabactive: boolean = true
  addclassreduceheight: boolean = false


  hidesidebarleft() {
    this.addclassreduceheight = true;
  }

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
      'tab': 'hometwo',
      'tabtitle': 'Grade 6/11+/Common Entrance'
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
    }
  ]

  gradesix: Array<any> = [
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
      'id': '1',
      'country': 'Antigua and Barbuda',
      'date': '4 July 1974'
    },

    {
      'id': '2',
      'country': 'Bahamas',
      'date': '4 July 1983'
    },

    {
      'id': '3',
      'country': 'Barbados',
      'date': '1 August 1973'
    },

    {
      'id': '4',
      'country': 'Belize',
      'date': '1 May 1974'
    },
    {
      'id': '5',
      'country': 'Domnica',
      'date': '1 May 1974'
    },

    {
      'id': '6',
      'country': 'Grenada',
      'date': '1 May 1974'
    },

    {
      'id': '7',
      'country': 'Guyana',
      'date': '1 August 1973'
    },

    {
      'id': '8',
      'country': 'Haiti',
      'date': '2 July 2002'
    },

    {
      'id': '9',
      'country': 'Jamaica',
      'date': '1 August 1973'
    },

    {
      'id': '10',
      'country': 'Montserrat',
      'date': '1 May 1974'
    },

    {
      'id': '11',
      'country': 'Saint Lucia',
      'date': '26 July 1974'
    },
    {
      'id': '12',
      'country': 'St Kitts and Nevis',
      'date': '1 May 1974'
    },
    {
      'id': '13',
      'country': 'St Vincent and the Grenadines',
      'date': '1 May'
    },
    {
      'id': '14',
      'country': 'Suriname',
      'date': '4 July 1995'
    },
    {
      'id': '15',
      'country': 'Trinidade and Tobaggo',
      'date': '1 August'

    },
    {




      'id': '16',
      'country': 'Anguilla'
    },

    {
      'id': '17',
      'country': 'Bermuda'
    },

    {
      'id': '18',
      'country': 'British Virgin Islands'
    },
    {
      'id': '19',
      'country': 'Cayman Islands'
    },
    {
      'id': '20',
      'country': 'Turks and Caicos Islands'
    },
  ]


  institutions: Array<any> = [
    {
      'institution_image': 'Caribbean Agricultural Develpment Institute – CARDI Logo.jpg',
      'institution_name': 'CARDI'
    },
    {
      'institution_image': 'Caribbean Agricultural Health and Food Safety Agency (CAHFSA) Logo.png',
      'institution_name': 'CAHFSA'
    },
    {
      'institution_image': 'Caribbean Aviation Safety and Security Oversight System- (CASSOS) Logo.png',
      'institution_name': 'CASSOS'
    },
    {
      'institution_image': 'Caribbean Centre for Development Administration (CARICAD) Logo.png',
      'institution_name': 'CARICAD'
    },
    {
      'institution_image': 'Caribbean Centre for Renewable Energy and Energy Efficiency (CCREEE)logo.png',
      'institution_name': 'CCREE'
    },
    {
      'institution_image': 'Caribbean Community Climate Change Centre (CCCCC) Logo.png',
      'institution_name': 'CCCCC'
    },
    {
      'institution_image': 'Caribbean Congress of Labour (CCL) Logo.jpg',
      'institution_name': 'CCL'
    },
    {
      'institution_image': 'Caribbean Court of Justice Logo.png',
      'institution_name': 'CCJ'
    },
    {
      'institution_image': 'Caribbean Development Bank (CDB) Logo.png',
      'institution_name': 'CDB'
    },
    {
      'institution_image': 'Caribbean Disaster Emergency Management Agency (CDEMA) Logo.jpg',
      'institution_name': 'CDEMA'
    },
    {
      'institution_image': 'Caribbean Examination Council (CXC) Logo.jpg',
      'institution_name': 'CXC'
    },
    {
      'institution_image': 'Caribbean Export Development Agency (Caribbean Export) Logo.jpeg',
      'institution_name': 'Caribbean Export)'
    },
    {
      'institution_image': 'Caribbean Institute for Meteorology and Hydrology (CIMH) Logo.jpg',
      'institution_name': 'CIMH'
    },
    {
      'institution_image': 'Caribbean Meteorological Organisation (CMO) Logo.jpg',
      'institution_name': 'CMO'
    },
    {
      'institution_image': 'Caribbean Organisation of Tax Administrators (COTA) Logo.jpg',
      'institution_name': 'COTA'
    },
    {
      'institution_image': 'Caribbean Public Health Agency (CARPHA) Logo.gif',
      'institution_name': 'CARPHA'
    },
    {
      'institution_image': 'Caribbean Regional Fisheries Mechanism Logo.png',
      'institution_name': 'CRFM'
    },
    {
      'institution_image': 'Caribbean Regional Information and Translation Institute (CRITI) Logo.jpg',
      'institution_name': 'CRITI'
    },
    {
      'institution_image': 'Caribbean Telecommunications Union (CTU) Logo.jpg',
      'institution_name': 'CTU'
    },
    {
      'institution_image': 'Caribbean Tourism Organization (CTO) Logo.png',
      'institution_name': 'CTO'
    },
    {
      'institution_image': 'CARICOM Competition Commission (CCC) Logo.png',
      'institution_name': 'CCC'
    },
    {
      'institution_image': 'CARICOM Development Fund (CDF) logo.jpg',
      'institution_name': 'CDF'
    },
    {
      'institution_image': 'CARICOM Implementing Agency for Crime and Security (IMPACS) Logo.jpg',
      'institution_name': 'IMPACS'
    },
    {
      'institution_image': 'CARICOM Private Sector Organization (CPSO) Logo.jpg',
      'institution_name': 'CPSO'
    },
    {
      'institution_image': 'CARICOM Regional Organisation for Standards and Quality (CROSQ) Logo.jpg',
      'institution_name': 'CROSQ'
    },
    {
      'institution_image': 'Council of Legal Education Logo.png',
      'institution_name': 'CLE'
    },
    {
      'institution_image': 'University of Guyana (UG) Logo.jpg',
      'institution_name': 'UG'
    },
    {
      'institution_image': 'University of the West Indies (CLE) Logo.png',
      'institution_name': 'UTWI'
    },
  ]

  constructor(private router: Router, private datatransferService: DataTransferService,
    private httpservice: HttpService) { }

  ngOnInit() {
    this.institutions.sort((a, b) => a.institution_name > b.institution_name ? 1 : -1)
  }

  parentEventHandlerFunction() {
    this.router.navigate(['component/category']);
  }
  parentEventHandlerFunctiontwo() {
    this.router.navigate(['component/associate-states']);
  }

  showothertabs(i: number) {
    // if (i == 1) {
    //   this.low = 5;
    //   this.high = 16;
    // }
    if (i == 0) {
      this.gradesixtabactive = true;
    }
    else if (i == 1) {
      this.gradesixtabactive = false;
    }
  }

  showinformation() {
    this.addclassreduceheight = true;
  }

  goback() {
    window.location.reload();
  }
}
