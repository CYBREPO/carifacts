import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { GridActionType, GridColumnDataType, GridColumnType, Pagination } from 'src/app/constants/constant';
import { HttpService } from 'src/app/service/http.service';
import { ModalDialogService } from 'src/app/service/modal-dialog.service';
import { CkEditorComponent } from 'src/app/shared/ck-editor/ck-editor.component';
import { TeamsComponent } from '../teams/teams.component';

@Component({
  selector: 'app-pages-dashboard',
  templateUrl: './pages-dashboard.component.html',
  styleUrls: ['./pages-dashboard.component.scss']
})
export class PagesDashboardComponent {
  
  pages: Array<any> = [];
  columns: Array<{
    title: string, dataField: string, type: string, dataType?: string, rowChild?: { component: any, show: boolean }, sort?: boolean,
    actions?: Array<{ event: string, type: string, title: string, class: string, conditionalDisplay?: { dataField: string, value: any } }>
  }> = [];
  totalCount: number;
  pageIndex: number = 1;
  pageSize = Pagination.PageSize;

  constructor(private httpService: HttpService, private modalDialogService: ModalDialogService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.setColumn();
    this.getAllPages();
  }

  setColumn() {
    this.columns = [
      { title: 'Page Name', dataField: 'name', type: GridColumnType.DATA, dataType: GridColumnDataType.TEXT },
      // { title: 'Images', dataField: 'name', type: GridColumnType.DATA, dataType: GridColumnDataType.TEXT },
      { title: 'Description', dataField: 'description', type: GridColumnType.DATA, dataType: GridColumnDataType.TEXT },
      {
        title: 'Action', dataField: '', type: GridColumnType.ACTION, actions: [
          { title: "edit", event: "edit", type: GridActionType.ICON, class: "fa fa-pencil" },
          { title: "delete", event: "delete", type: GridActionType.ICON, class: "fa fa-trash" },
        ]
      }
    ]
  }

  getAllPages() {
    this.httpService.httpGet(ApiUrls.pages.getPages, null).subscribe((res: any) => {
      if (res['success']) {
        this.pages = res['data'];
        this.totalCount = res['count'];
      }
    })
  }

  paginationEventHandler(evt: any) {

  }

  gridEvent(evt: any) {
    if (evt.event == "delete") {
      const dialogRef = this.modalDialogService.openDialog({
        title: "Delete",
        message: "Are you sure you want to delete this company!",
        buttons: [
          { title: "YES", result: "YES", class: "btn-success" },
          { title: "NO", result: "NO", class: "btn-danger" },
        ]
      })
      dialogRef.subscribe(res => {
        if (res == "YES") {
          this.httpService.httpPost(ApiUrls.pages.deletePages, { id: evt.data._id }).subscribe((res: any) => {
            if (res['success']) {
              // this.getAllCompanies();
              this.getAllPages();
            }
          });
        }
      });
    }
    if (evt.event == 'edit') {
      this.addUpdate(evt.data);
    }
  }

  addUpdate(data: any = null) {
    const dialogRef = this.dialog.open(TeamsComponent, {
      height: "80%",
      width: "80%",
      data: data == null ? { name: "", description: "" } : data
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res != null) {
        let apiUrl = ApiUrls.pages.updatePage;
        if (res.id == undefined || res.id == null || res.id == "") {
          apiUrl = ApiUrls.pages.savePage
        }
        this.httpService.httpPostFormData(apiUrl, res).subscribe(res => {

          this.getAllPages();
        });
      }
    });
  }
}
