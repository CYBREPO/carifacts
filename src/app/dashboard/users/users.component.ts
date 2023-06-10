import { Component } from '@angular/core';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { GridActionType, GridColumnDataType, GridColumnType, Pagination } from 'src/app/constants/constant';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users: Array<any> = [];
  columns: Array<{
    title: string, dataField: string, type: string, dataType?: string, rowChild?: { component: any, show: boolean },sort?:boolean,
    actions?: Array<{ event: string, type: string, title: string, class: string, conditionalDisplay?: { dataField: string, value: any } }>
  }> = [];
  totalCount: number;
  pageIndex: number = 1;
  pageSize = Pagination.PageSize;

  constructor(private httpService: HttpService){}

  ngOnInit(){
    this.setColums();
    this.getAllUsers();
  }

  setColums(){
    this.columns = [
      {title: 'Name', dataField: 'name', type: GridColumnType.DATA, dataType: GridColumnDataType.TEXT },
      {title: 'Email', dataField: 'email', type: GridColumnType.DATA, dataType: GridColumnDataType.TEXT },
      // {title: 'Action', dataField: '', type: GridColumnType.ACTION, actions : [
      //   {title: "edit", event: "edit", type:  GridActionType.ICON, class:"fa fa-pencil"},
      //   {title: "delete", event: "delete", type: GridActionType.ICON, class:"fa fa-trash"},
      // ]}
    ]
  }

  getAllUsers(){
    let param = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize
    }
    this.httpService.httpPost(ApiUrls.account.getUsers,param).subscribe((res: any) => {
      if(res['success']){
        this.users = res['data'];
        this.totalCount = res['count'];
      }
    });
  }

  paginationEventHandler(event: {pageIndex: number, pageSize: number}){
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this.getAllUsers();
  }

  gridEvent(evt: any){
    if(evt.event == "delete"){
      this.httpService.httpPost(ApiUrls.brand.deleteBrand,{id: evt.data._id}).subscribe((res: any) => {
        if(res['success']){
          this.getAllUsers();
        }
      });
    }
    if(evt.event == 'edit'){
      // this.modalBtn.nativeElement.click();
      // this.httpService.httpPost(ApiUrls.brand.deleteBrand,evt.data).subscribe((res: any) => {
      //   if(res['success']){
      //     this.getAllCompanies();
      //   }
      // });
    }
  }
}
