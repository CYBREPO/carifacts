import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { GridActionType, GridColumnDataType, GridColumnType, Pagination, fuel } from 'src/app/constants/constant';
import { HttpService } from 'src/app/service/http.service';
import { ModalDialogService } from 'src/app/service/modal-dialog.service';

@Component({
  selector: 'app-manage-cars',
  templateUrl: './manage-cars.component.html',
  styleUrls: ['./manage-cars.component.scss']
})
export class ManageCarsComponent {

  companies: Array<any> = [];
  models: Array<any> = [];
  vehicles: Array<any> = [];
  columns: Array<{
    title: string, dataField: string, type: string, dataType?: string, rowChild?: { component: any, show: boolean }, sort?: boolean,
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
  isLoading: boolean = false;
  searchText: string = "";

  @ViewChild('modalBtn') modalBtn: ElementRef;

  constructor(private httpService: HttpService, private fb: FormBuilder, private modalDialogService: ModalDialogService) { }

  ngOnInit() {
    this.setColums();
    this.getAllCompanies();
    this.getAllVehicles();
    this.initForm();
  }

  initForm() {
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

  setColums() {
    this.columns = [
      { title: 'Car Company', dataField: 'make', type: GridColumnType.DATA, dataType: GridColumnDataType.TEXT },
      { title: 'Model', dataField: 'model', type: GridColumnType.DATA, dataType: GridColumnDataType.TEXT },
      { title: 'Type', dataField: 'type', type: GridColumnType.DATA, dataType: GridColumnDataType.TEXT },
      { title: 'Year', dataField: 'year', type: GridColumnType.DATA, dataType: GridColumnDataType.TEXT },
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
        this.companies = res['data'];
      }
    });
  }

  getBrandsById() {
    this.formControl['model'].setValue('');
    this.models = [];
    this.httpService.httpGet(ApiUrls.brand.getBrandById, { id: this.formControl['brand'].value }).subscribe((res: any) => {
      if (res['success']) {
        this.models = res['data']['models'];
      }
    });
  }

  getAllVehicles() {
    let param = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      searchText: this.searchText
    }
    this.httpService.httpPost(ApiUrls.vehicle.getVehicles, param).subscribe((res: any) => {
      if (res['success']) {
        this.vehicles = res['data'];
        this.totalCount = res['count'];
      }
    })
  }

  paginationEventHandler(event: { pageIndex: number, pageSize: number }) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this.getAllVehicles();
  }

  gridEvent(evt: any) {
    if (evt.event == "delete") {
      const dialogRef = this.modalDialogService.openDialog({
        title: "Delete Vehicle",
        message: "Are you sure you want to delete this Vehicle!",
        buttons: [
          { title: "YES", result: "YES", class: "btn-success" },
          { title: "NO", result: "NO", class: "btn-danger" },
        ]
      })
      dialogRef.subscribe(res => {
        if (res == "YES") {
          this.httpService.httpPost(ApiUrls.brand.deleteBrand, { id: evt.data._id }).subscribe((res: any) => {
            if (res['success']) {
              this.getAllCompanies();
            }
          });
        }
        });
        }
        if (evt.event == 'edit') {
          this.modalBtn.nativeElement.click();
          // this.httpService.httpPost(ApiUrls.brand.deleteBrand,evt.data).subscribe((res: any) => {
          //   if(res['success']){
          //     this.getAllCompanies();
          //   }
          // });
        }
      }

  submit() {
        const formData: FormData = new FormData();
        formData.append(`description`, this.formControl['description'].value);
        // formData.append(`id`, "");
        formData.append(`listingCreatedTime`, "");
        formData.append(`make`, this.formControl['brand'].value);
        formData.append(`marketAreaId`, "");
        formData.append(`marketCountry`, "");
        formData.append(`model`, this.formControl['model'].value);
        formData.append(`name`, "");
        formData.append(`registration`, "");
        formData.append(`averageFuelEconomy`, this.formControl['mileage'].value);
        formData.append(`fuelUnit`, this.formControl['fuelUnit'].value);
        formData.append(`fuelUnitLabel`, this.fuel.find(m => m.unit == this.formControl['fuelUnit'].value)?.label ?? "");
        formData.append(`type`, this.formControl['type'].value);
        formData.append(`fuelGrade`, this.formControl['fuelGrade'].value);
        formData.append(`numberOfDoors`, this.formControl['doors'].value);
        formData.append(`numberOfSeats`, this.formControl['seats'].value);
        formData.append(`year`, this.formControl['year'].value);
        formData.append(`price`, this.formControl['price'].value);
        formData.append(`fuelType[label]`, this.formControl['fuelType'].value);
        formData.append(`fuelType[value]`, this.fuelTypes.find(m => m.label == this.formControl['fuelType'].value)?.value ?? "");

        formData.append(`ageBook`, this.formControl['ageBook'].value);
        formData.append(`automaticTransmission`, this.formControl['automaticTransmission'].value);
        formData.append(`AllWheelDrive`, this.formControl['AllWheelDrive'].value);
        formData.append(`appleCarPlay`, this.formControl['appleCarPlay'].value);
        formData.append(`androidAuto`, this.formControl['androidAuto'].value);
        formData.append(`auxInput`, this.formControl['auxInput'].value);
        formData.append(`backupCamera`, this.formControl['backupCamera'].value);
        formData.append(`bluetooth`, this.formControl['bluetooth'].value);
        formData.append(`childSeat`, this.formControl['childSeat'].value);
        formData.append(`heatedSeats`, this.formControl['heatedSeats'].value);
        formData.append(`keylessEntry`, this.formControl['keylessEntry'].value);
        formData.append(`sunRoof`, this.formControl['sunRoof'].value);
        formData.append(`tollPass`, this.formControl['tollPass'].value);
        formData.append(`usbCharger`, this.formControl['usbCharger'].value);
        formData.append(`usbInput`, this.formControl['usbInput'].value);


        for(let i = 0; i< this.fileData?.length; i++) {
        formData.append(`images`, this.fileData[i]);
      }


      this.httpService.httpPostFormData(ApiUrls.vehicle.setVehicleDetails, formData).subscribe(res => { });

    }
  }
