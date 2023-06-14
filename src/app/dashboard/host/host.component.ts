import { Component } from '@angular/core';
import { GridActionType, GridColumnDataType, GridColumnType, Pagination } from 'src/app/constants/constant';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent {

  models: Array<any> = [];
  columns: Array<{
    title: string, dataField: string, type: string, dataType?: string, rowChild?: { component: any, show: boolean }, sort?: boolean,
    actions?: Array<{ event: string, type: string, title: string, class: string, conditionalDisplay?: { dataField: string, value: any } }>
  }> = [];
  totalCount: number;
  pageIndex: number = 1;
  pageSize = Pagination.PageSize;
  
  constructor(private httpService: HttpService){}

  ngOnInit(){

  }

  setColums() {
    this.columns = [
      { title: 'Car Company', dataField: 'carCompany', type: GridColumnType.DATA, dataType: GridColumnDataType.TEXT },
      { title: 'Model', dataField: 'name', type: GridColumnType.DATA, dataType: GridColumnDataType.TEXT },
      {
        title: 'Action', dataField: '', type: GridColumnType.ACTION, actions: [
          { title: "edit", event: "edit", type: GridActionType.ICON, class: "fa fa-pencil" },
          { title: "delete", event: "delete", type: GridActionType.ICON, class: "fa fa-trash" },
        ]
      }
    ]
  }
}
