import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { locations, vehicleModels } from 'src/app/constants/constant';
import { DataTransferService } from 'src/app/service/data-transfer.service';
import { HttpService } from 'src/app/service/http.service';
import { ModalDialogService } from 'src/app/service/modal-dialog.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // low: number = 0
  // high: number = 5
  gradesixtabactive: boolean = true
  addclassreduceheight: boolean = false
  bannerData: any
  gridData: Array<any> = [];
  subMenus: Array<any> = [];
  selectedSidbar: any;
  // countries: Array<any> = [];

  

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
  ];
  gradesixKeys: Array<any> = ['antigua', 'pillar', 'organs', 'symbols', 'founding', 'howcaricomworks',
    'dates', 'csme', 'institution', 'secretaries', 'award', 'Health'];




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
      'institution_image': 'Caribbean Disaster Emergency Management Agency (CDEMA) Logo.jpg',
      'institution_name': 'CDEMA'
    },
    {
      'institution_image': 'Caribbean Examination Council (CXC) Logo.jpg',
      'institution_name': 'CXC'
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
      'institution_image': 'University of Guyana (UG) Logo.jpg',
      'institution_name': 'UG'
    },
    {
      'institution_image': 'University of the West Indies (CLE) Logo.png',
      'institution_name': 'UTWI'
    }
  ]

  associtedinstitutions: Array<any> = [
    {
      'institution_image': 'Caribbean Development Bank (CDB) Logo.png',
      'institution_name': 'CDB'
    },
    {
      'institution_image': 'CARIBBEAN LAW INSTITUTE/CARIBBEAN LAW INSTITUTE CENTRE (CLI)/(CLIC)',
      'institution_name': 'CLI/CLIC'
    },
    {
      'institution_image': 'OECS.png',
      'institution_name': 'OECS Commission'
    },
    {
      'institution_image': 'uwi-1-640x480.jpg',
      'institution_name': 'UWI'
    }

  ]
  functionalinstitutions: Array<any> = [
    {
      'institution_image': 'Caribbean Export Development Agency (Caribbean Export) Logo.jpeg',
      'institution_name': 'CARIBBEAN EXPORT'
    },
    {
      'institution_image': 'Council of Legal Education Logo.png',
      'institution_name': 'CLE'
    },
    {
      'institution_image': 'Caribbean Tourism Organization (CTO) Logo.png',
      'institution_name': 'CTO'
    }
  ]

  secretaries: Array<any> = [
    {
      'image': 'Amb Irwin LaRocque, Dominica 2011-2021.png',
      'name': 'Amb Irwin LaRocque, Dominica ',
      'appointmentyear': '2011-2021'
    },
    {
      'image': 'Ambassador Fred Lloyd Cozier, Barbados 1968-1969.png',
      'name': 'Ambassador Fred Lloyd Cozier, Barbados ',
      'appointmentyear': '1968-1969'
    },
    {
      'image': 'Ambassador Hon. Alister McIntyre Grenada 1974-1977.png',
      'name': 'Ambassador Hon. Alister McIntyre Grenada',
      'appointmentyear': '1974-1977'
    },
    {
      'image': 'Ambassador Hon. Edwin W. Carrington, Trinidad and Tobago1992-2010.png',
      'name': 'Ambassador Hon. Edwin W. Carrington, Trinidad and Tobago',
      'appointmentyear': '1992-2010'
    },
    {
      'image': 'Ambassador Hon. William G. Demas, Trinidad and Tobago 1973-1974.png',
      'name': 'Ambassador Hon. William G. Demas, Trinidad and Tobago',
      'appointmentyear': '1973-1974'
    },
    {
      'image': 'Ambassador Lolita Applewhaite, Barbados 2010-2011.png',
      'name': 'Ambassador Lolita Applewhaite, Barbados',
      'appointmentyear': '2010-2011'
    },
    {
      'image': 'Ambassador Mr. Joseph Tyndall, Guyana 1977-1978.png',
      'name': 'Ambassador Mr. Joseph Tyndall, Guyana ',
      'appointmentyear': '1977-1978'
    },
    {
      'image': 'Ambassador Roderick Rainford, Jamaica 1983-1992.png',
      'name': 'Ambassador Roderick Rainford, Jamaica ',
      'appointmentyear': '1983-1992'
    },
    {
      'image': 'Dr. Carla Natalie Barnett, Belize 2021-Present.png',
      'name': 'Dr. Carla Natalie Barnett, Belize',
      'appointmentyear': '2021-Present'
    },
    {
      'image': 'Dr. Kurleigh King, Barbados 1979-1983.png',
      'name': 'Dr. Kurleigh King, Barbados',
      'appointmentyear': '1979 - 1983'
    }
  ]














  awardees: Array<any> = [
    {
      'id': '1',
      'Name': ' The Late Dr. William Gilbert Demas',
      'Country': ' Trinidad and Tobago',
      'Designation': 'Former Secretary-General, CARICOM',
      'Date conferred': ' 1992'
    },
    {
      'id': '2',
      'Name': ' Sir Shridath Surendranath Ramphal',
      'Country': ' Guyana',
      'Designation': 'Former Secretary-General of the Commonwealth',
      'Date conferred': ' 1992'
    },
    {
      'id': '3',
      'Name': ' Sir Derek Alton Walcott',
      'Country': ' Saint Lucia',
      'Designation': 'Poet, Playwright, Theatrical Director and Nobel Prize winner for Literature 1992',
      'Date conferred': ' 1992'
    },
    {
      'id': '4',
      'Name': ' The Late Dame Ruth Nita Barrow',
      'Country': ' Barbados',
      'Designation': 'Former Governor-General, Barbados',
      'Date conferred': ' 1994'
    },
    {
      'id': '5',
      'Name': ' Justice P. Telford Georges',
      'Country': ' Commonwealth of Dominica',
      'Designation': 'Caribbean Legal Luminary',
      'Date conferred': ' 1994'
    },
    {
      'id': '6',
      'Name': ' Sir Meredith Alister McIntyre',
      'Country': ' Grenada',
      'Designation': 'Former Secretary-General, CARICOM',
      'Date conferred': ' 1994'
    },
    {
      'id': '7',
      'Name': ' Hon. Michael Norman Manley',
      'Country': ' Jamaica',
      'Designation': 'Former Prime Minister, Jamaica',
      'Date conferred': ' 1994'
    },
    {
      'id': '8',
      'Name': ' Right Hon. Vere Cornwall Bird',
      'Country': ' Antigua and Barbuda',
      'Designation': 'Former Prime Minister, Antigua and Barbuda',
      'Date conferred': ' 1998'
    },
    {
      'id': '9',
      'Name': ' Arthur Napoleon Raymond Robinson',
      'Country': ' Trinidad and Tobago',
      'Designation': 'Former Prime Minister/President, Trinidad and Tobago',
      'Date conferred': ' 1998'
    },
    {
      'id': '10',
      'Name': ' Sir Phillip Manderson Sherlock',
      'Country': ' Jamaica',
      'Designation': 'Caribbean Scholar and Educationist',
      'Date conferred': ' 1998'
    },
    {
      'id': '11',
      'Name': ' Sir Garfield Sobers',
      'Country': ' Barbados',
      'Designation': 'Cricketer Par Excellence',
      'Date conferred': ' 1998'
    },
    {
      'id': '12',
      'Name': ' Sir George Alleyne',
      'Country': ' Barbados',
      'Designation': 'Director of PAHO for the English speaking Caribbean',
      'Date conferred': ' 2001'
    },
    {
      'id': '13',
      'Name': ' Right Hon. George Cadle Price',
      'Country': ' Belize',
      'Designation': 'Former Prime Minister, Belize',
      'Date conferred': ' 2001'
    },
    {
      'id': '14',
      'Name': ' Dr. Slinger Fransisco (Mighty Sparrow)',
      'Country': ' Trinidad and Tobago',
      'Designation': 'Calypsonian Par Excellence',
      'Date conferred': ' 2001'
    },
    {
      'id': '15',
      'Name': ' The Late Dame Mary Eugenia Charles',
      'Country': ' Dominica',
      'Designation': 'Former Prime Minister, Dominica',
      'Conferred': ' February, 2002'
    },
    {
      'id': '16',
      'Name': ' Sir John Melvin Compton',
      'Country': ' Saint Lucia',
      'Designation': 'Former Prime Minister, Saint Lucia',
      'Conferred': ' 2002'
    },
    {
      'id': '17',
      'Name': ' The Late Lloyd Algernon Best',
      'Country': ' Trinidad and Tobago',
      'Designation': 'Economist, politician, publicist, political commentator, philosopher and ‘doctor of Politics’',
      'Conferred': ' 2002'
    },
    {
      'id': '18',
      'Name': ' Professor Hon. Ralston “Rex” Nettleford',
      'Country': ' Jamaica',
      'Designation': 'Professor, a dancer, a writer, a manager, an orator, a mentor, a critic, international icon.',
      'Conferred': ' 2008'
    },
    {
      'id': '19',
      'Name': ' Hon. George Lamming',
      'Country': ' Barbados',
      'Designation': 'poet, novelist, essay writer, orator, lecturer, teacher, editor and tireless activist for a new world-order',
      'Conferred': ' 2008'
    },
    {
      'id': '20',
      'Name': ' Brian Charles Lara, T.C.',
      'Country': ' Trinidad and Tobago',
      'Designation': 'Cricketer Par Excellence',
      'Conferred': ' 2008'
    },
    {
      'id': '21',
      'Name': ' His Excellency Dr. Nicholas Joseph Orville Liverpool',
      'Country': ' Commonwealth of Dominica',
      'Designation': 'President of the Commonwealth of Dominica',
      'Conferred': ' 2008'
    },
    {
      'id': '22',
      'Name': ' The Most Hon. Percival Noel James Patterson',
      'Country': ' Jamaica',
      'Designation': 'Former Prime Minister, Jamaica',
      'Conferred': ' 2009'
    },
    {
      'id': '23',
      'Name': ' Sir Edwin Carrington',
      'Country': ' Trinidad and Tobago',
      'Designation': 'Former Secretary-General, CARICOM',
      'Conferred': ' 2011'
    },
    {
      'id': '24',
      'Name': ' Hon. Kamaluddin Mohamed',
      'Country': ' Trinidad and Tobago',
      'Designation': 'Minister of Government and Ambassador to CARICOM',
      'Conferred': ' 2012'
    },
    {
      'id': '25',
      'Name': ' Sir Arthur Lewis',
      'Country': ' Saint Lucia',
      'Designation': 'Economist, Nobel Prize Winner, 1979',
      'Conferred': ' 1993'
    },
    {
      'id': '26',
      'Name': ' Vidiadar Surajpra-Sad Naipaul (V.S. Naipaul)',
      'Country': ' Trinidad and Tobago',
      'Designation': 'Exceptional Caribbean Author',
      'Conferred': ' 1993'
    }
  ]
  constructor(private router: Router, private datatransferService: DataTransferService,
    private httpservice: HttpService) { }




  ngOnInit() {
    // this.institutions.sort((a, b) => a.institution_name > b.institution_name ? 1 : -1)
    this.secretaries.sort((a, b) => {
      let first = a.appointmentyear.split('-')[0]
      let second = b.appointmentyear.split('-')[0]
      return Number(first) < Number(second) ? 1 : -1
    });
    this.getBannerImages();
    // this.getSubMenus();
    this.getAllGrids();
    // this.getAllCountries();
  }

  hidesidebarleft(event: any) {
    this.selectedSidbar = event;
    if(event.has_submenu == 'Yes'){
      this.addclassreduceheight = true;
      this.getSubMenus(event.id);
    }
    else{
      this.subMenus = [];
    }
  }

  getBannerImages() {
    this.httpservice.httpGet(ApiUrls.banner.getSliders, null).subscribe((res: any) => {
      if (res['success']) {
        this.bannerData = res['data'];
        // console.log(res['data']);
        // if (this.bannerData) {
        //   this.bannerData?.forEach((m: any) => {
        //     m.file = m.file.replace('\\','');
        //   });
        //   console.log(this.bannerData);
        // }
      }
    })
  }

  getSubMenus(id: number) {
    this.httpservice.httpGet(ApiUrls.banner.getMenus + "/" + id, null).subscribe((res: any) => {
      if (res['success']) {
        this.subMenus = res['data'];
        // for (let i = 0; i < this.gradesix.length; i++) {
        //   this.gradesix[i]['tab'] = this.gradesixKeys[i];
        // }

      }
    })
  }

  getAllCountries() {
    this.httpservice.httpGet(ApiUrls.grid.getAllCountries, null).subscribe((res: any) => {
      if (res['success']) {
        this.countries = res['data'];
        this.countries?.map((m: any) => { m.countryFlag = environment.url + m.countryFlag; return m });

      }
    })
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



  // Ambassador Irwin LaRocque, 2022.jpg
  // Dame Billie Miller, 2022[8].jpg
  // Sir Viv Richards, 2022.jpg
  // David-Rudder, 2022.jpg
  // Hon-Kamaluddin-Mohammed.jpg
  // edwin Carrington.png



  getAllGrids() {
    this.httpservice.httpGet(ApiUrls.grid.getGrids, null).subscribe((res: any) => {
      if (res['success']) {
        this.gridData = res['data'];
        if (this.gridData) {
          this.gridData.map((m: any) => {
            m.gridSixImage = environment.url + m.gridSixImage;
            return m
          })
        }
      }
    })
  }
}
