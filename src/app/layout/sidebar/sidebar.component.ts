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

  constructor(private httpService: HttpService){}

  ngOnInit(): void {
    this.getSideBar();
  }

  getSideBar(){
    this.httpService.httpGet(ApiUrls.banner.getAllSidebar,null).subscribe((res:any) => {
      if(res['success']){
        this.tabsoftabs = res['data'];
      }
    })
  }

  hidesidebar(i: number,tab: any) {
    if(i == 1){

      this.hidesidebarEvent.emit(tab);
    }
  }

}
