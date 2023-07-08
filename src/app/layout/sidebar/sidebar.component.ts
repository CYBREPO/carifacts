import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  newItem: any;
  @Output() hidesidebarEvent = new EventEmitter<any>();
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

  hidesidebar(i: number) {
    if(i == 1){
      this.hidesidebarEvent.emit();
    }
  }

}
