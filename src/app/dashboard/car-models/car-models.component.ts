import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { GridActionType, GridColumnDataType, GridColumnType, Pagination } from 'src/app/constants/constant';
import { HttpService } from 'src/app/service/http.service';
import { ModalDialogService } from 'src/app/service/modal-dialog.service';

@Component({
  selector: 'app-car-models',
  templateUrl: './car-models.component.html',
  styleUrls: ['./car-models.component.scss']
})
export class CarModelsComponent {

  filteredCompanies: Array<any> = [];
  allCompanies: Array<any> = [];
  models: Array<any> = [];
  columns: Array<{
    title: string, dataField: string, type: string, dataType?: string, rowChild?: { component: any, show: boolean }, sort?: boolean,
    actions?: Array<{ event: string, type: string, title: string, class: string, conditionalDisplay?: { dataField: string, value: any } }>
  }> = [];
  totalCount: number;
  pageIndex: number = 1;
  pageSize = Pagination.PageSize;

  carModelForm: FormGroup;
  file: File;
  submitted: boolean = false;
  isLoading: boolean = false;
  current: any;

  @ViewChild('modalBtn') modalBtn: ElementRef;

  constructor(private httpService: HttpService, private fb: FormBuilder, private modalDialogService: ModalDialogService) { }

  ngOnInit() {
    this.setColums();
    this.getAllCompanies();
    this.getAllModels();
    this.initForm();
    this.initizeTypeAhead();
  }

  initForm() {
    this.carModelForm = this.fb.group({
      carCompany: ['', [Validators.required]],
      carModel: ['', [Validators.required]]
    });
  }

  initizeTypeAhead() {
    this.carModelForm.controls['carCompany'].valueChanges.pipe().subscribe(res => {
      if (typeof res == 'string' && res.length > 1) {
        this.isLoading = true;
        this.filteredCompanies = this.allCompanies.filter(m => m.name.toLowerCase().includes(res.toLowerCase()) ||
        m._id == res);
        this.isLoading = false;
      }
    })
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

  getAllCompanies() {
    this.httpService.httpPost(ApiUrls.brand.getAllBrands, null).subscribe((res: any) => {
      if (res['success']) {
        this.allCompanies = res['data'];
        this.filteredCompanies = JSON.parse(JSON.stringify(this.allCompanies));
      }
    });
  }

  getAllModels() {
    let param = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize
    }
    this.httpService.httpPost(ApiUrls.brand.getAllModels, param).subscribe((res: any) => {
      if (res['success']) {
        this.models = res['data'];
        this.totalCount = res['count'];
      }
    });
  }

  displayTypeAheadCompay(val: any) {
    if (val != null && val != undefined && val != '') {
      const res = this.filteredCompanies.find(m => m._id == val);
      return res != null && res != undefined ? res.name : val;
    }
  }

  paginationEventHandler(event: { pageIndex: number, pageSize: number }) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this.getAllModels();
  }

  gridEvent(evt: any) {
    if (evt.event == "delete") {
      this.current = evt.data;
      const dialogRef = this.modalDialogService.openDialog({
        title: "Delete Model",
        message: "Are you sure you want to delete this Vehicle Model!",
        buttons: [
          { title: "YES", result: "YES", class: "btn-success" },
          { title: "NO", result: "NO", class: "btn-danger" },
        ]
      })
      dialogRef.subscribe(res => {
        if (res == "YES") {
          this.httpService.httpPost(ApiUrls.brand.deleteBrand, { id: evt.data._id }).subscribe((res: any) => {
            if (res['success']) {
              this.getAllModels();
            }
          });
        }
      });
    }
    if (evt.event == 'edit') {
      this.modalBtn.nativeElement.click();
      this.current = evt.data;
      this.carModelForm.patchValue({
        carCompany: evt.data.carCompanyId,
        carModel: evt.data.name,
      });
    }
  }

  addModels() {
    this.submitted = true;

    if (this.carModelForm.invalid) return;

    let param = {
      brandId: this.carModelForm.controls['carCompany'].value,
      name: this.carModelForm.controls['carModel'].value,
    }

    // let api = ApiUrls.brand.setModels;
    // if(this.current){
    //   api = ApiUrls.brand.;
    // }

    this.httpService.httpPost(ApiUrls.brand.setModels, param).subscribe(res => {
      this.modalBtn.nativeElement.click();
    });
  }
}
