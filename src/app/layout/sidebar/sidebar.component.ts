import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { HttpService } from 'src/app/service/http.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() hidesidebarEvent = new EventEmitter<any>();
  tabsoftabs: Array<any> = [];
  tabsofKeys: Array<any> = ['home','hometwo','cxc','faculty','kyc'];

  constructor(private httpService: HttpService){}

  ngOnInit(): void {
    this.getSideBar();
  }

  getSideBar(){
    this.httpService.httpGet(ApiUrls.banner.getAllSidebar,null).subscribe((res:any) => {
      if(res['success']){
        this.tabsoftabs = res['data'];
        for(let i = 0; i < this.tabsoftabs.length; i++){
          this.tabsoftabs[i]['tab'] = this.tabsofKeys[i];
        }
      }
    })
  }

  hidesidebar(i: number) {
    if(i == 1){
      this.hidesidebarEvent.emit();
    }
  }

}
