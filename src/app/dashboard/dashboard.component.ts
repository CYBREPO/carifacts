import { Component } from '@angular/core';
import { HttpService } from '../service/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiUrls } from '../constants/apiRoutes';
import { fuel } from '../constants/constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  vehicleForm: FormGroup;
  fileData: FileList;
  fuel = fuel.fuelUnits;
  fuelTypes = fuel.fuelTypes;

  constructor(private httpService: HttpService, private fb: FormBuilder) { }

  ngOnInit() {
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


  submit() {
    debugger
    const formData: FormData = new FormData();
    let fuelType = {
      label: this.formControl['fuelType'].value,
      value: this.fuelTypes.find(m => m.label == this.formControl['fuelType'].value)?.value??"",
    }
    formData.append(`description`, this.formControl['description'].value);
    // formData.append(`id`, "");
    formData.append(`listingCreatedTime`, "");
    formData.append(`make`, this.formControl['brand'].value);
    formData.append(`marketAreaId`, "");
    formData.append(`marketCountry`, "");
    formData.append(`model`, this.formControl['model'].value);
    formData.append(`name`, "");
    formData.append(`registration`, "");
    formData.append(`trim`, "");
    formData.append(`fuelUnit`, this.formControl['fuelUnit'].value);
    formData.append(`fuelUnitLabel`, this.fuel.find(m => m.unit == this.formControl['fuelUnit'].value)?.label??"");
    formData.append(`type`, this.formControl['type'].value);
    formData.append(`fuelGrade`, this.formControl['fuelGrade'].value);
    formData.append(`numberOfDoors`, this.formControl['doors'].value);
    formData.append(`numberOfSeats`, this.formControl['seats'].value);
    formData.append(`year`, this.formControl['year'].value);
    // formData.append(`fuelType`, fuelType.toString());
    formData.append(`fuelType[label]`, this.formControl['fuelType'].value);
    formData.append(`fuelType[value]`, this.fuelTypes.find(m => m.label == this.formControl['fuelType'].value)?.value??"");

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


    for (let i = 0; i < this.fileData?.length; i++) {
      formData.append(`images`, this.fileData[i]);
    }


    this.httpService.httpPostFormData(ApiUrls.vehicle.setVehicleDetails,formData).subscribe(res => {});

  }
}
