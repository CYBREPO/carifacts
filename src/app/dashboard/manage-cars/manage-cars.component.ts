import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { GridActionType, GridColumnDataType, GridColumnType, Pagination, fuel } from 'src/app/constants/constant';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-manage-cars',
  templateUrl: './manage-cars.component.html',
  styleUrls: ['./manage-cars.component.scss']
})
export class ManageCarsComponent {

  companies: Array<any> = [];
  models: Array<any> = [];
  columns: Array<{
    title: string, dataField: string, type: string, dataType?: string, rowChild?: { component: any, show: boolean },sort?:boolean,
    actions?: Array<{ event: string, type: string, title: string, class: string, conditionalDisplay?: { dataField: string, value: any } }>
  }> = [];
  totalCount: number;
  pageIndex: number = 1;
  pageSize = Pagination.PageSize;
  
  vehicleForm: FormGroup;
  fileData: FileList;
  fuel = fuel.fuelUnits;
  fuelTypes = fuel.fuelTypes;
  submitted: boolean = false;
  isLoading:boolean = false;

  @ViewChild('modalBtn') modalBtn: ElementRef;
  
  constructor(private httpService: HttpService, private fb: FormBuilder){}

  ngOnInit(){
    this.setColums();
    this.getAllCompanies();
    this.initForm();
  }

  initForm(){
    this.vehicleForm = this.fb.group({
      description: [''],
      files: [''],
      brand: [''],
      model: [''],
      price: [''],
      mileage: [''],
      fuelType: [''],
      type: [''],
      fuelUnit: [''],
      fuelGrade: [''],
      doors: [''],
      seats: [''],
      year: [''],


      ageBook: [false],
      automaticTransmission: [false],
      AllWheelDrive: [false],
      appleCarPlay: [false],
      androidAuto: [false],
      auxInput: [false],
      backupCamera: [false],
      bluetooth: [false],
      childSeat: [false],
      heatedSeats: [false],
      keylessEntry: [false],
      sunRoof: [false],
      tollPass: [false],
      usbCharger: [false],
      usbInput: [false],
    });
  }

  get formControl() {
    return this.vehicleForm.controls;
  }

  handleFileInput(event: any): void {
    this.fileData = event?.target?.files;
  }

  setColums(){
    this.columns = [
      {title: 'Car Company', dataField: 'name', type: GridColumnType.DATA, dataType: GridColumnDataType.TEXT },
      {title: 'MOdel', dataField: 'name', type: GridColumnType.DATA, dataType: GridColumnDataType.TEXT },
      {title: 'Action', dataField: '', type: GridColumnType.ACTION, actions : [
        {title: "edit", event: "edit", type:  GridActionType.ICON, class:"fa fa-pencil"},
        {title: "delete", event: "delete", type: GridActionType.ICON, class:"fa fa-trash"},
      ]}
    ]
  }

  getAllCompanies(){
    this.httpService.httpPost(ApiUrls.brand.getAllBrands,null).subscribe((res: any) => {
      if(res['success']){
        this.companies = res['data'];
      }
    });
  }

  getBrandsById(){
    this.formControl['model'].setValue('');
    this.models =[];
    this.httpService.httpPost(ApiUrls.brand.getBrandById, {id: this.formControl['brand'].value}).subscribe((res: any) => {
      if(res['success']){
        this.models = res['data'];
      }
    });
  }

  getAllVehicles(){

  }

  paginationEventHandler(event: {pageIndex: number, pageSize: number}){
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this.getAllCompanies();
  }

  gridEvent(evt: any){
    if(evt.event == "delete"){
      this.httpService.httpPost(ApiUrls.brand.deleteBrand,{id: evt.data._id}).subscribe((res: any) => {
        if(res['success']){
          this.getAllCompanies();
        }
      });
    }
    if(evt.event == 'edit'){
      this.modalBtn.nativeElement.click();
      // this.httpService.httpPost(ApiUrls.brand.deleteBrand,evt.data).subscribe((res: any) => {
      //   if(res['success']){
      //     this.getAllCompanies();
      //   }
      // });
    }
  }

  addModels(){
    this.submitted = true;

    if(this.vehicleForm.invalid) return;

    let param = {
      brandId: this.vehicleForm.controls['carCompany'].value,
      name: this.vehicleForm.controls['carModel'].value,
    }

    this.httpService.httpPost(ApiUrls.brand.setModels,param).subscribe(res => {
      this.modalBtn.nativeElement.click();
    });
  }
}
