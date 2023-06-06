import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hostform: FormGroup;
  carFiles: FileList;
  profile: File;
  constructor(private fb: FormBuilder, private httpService:HttpService) { }

  ngOnInit(): void {
    this.initForm()
  }



  initForm() {
    this.hostform = this.fb.group({
      car: [''],
      Profile: [''],
      mobilenumber: [''],
      license: [''],
      goals: [''],
      availability: [''],
      details: [''],
      photos: [''],
      payout: [''],
      qualitystandards: [''],
      submityourlisting: [''],
    })
  }

  handleFileInput(event: any): void {
    this.carFiles = event?.target?.files;
  }

  handleFileInputProfile(event: any): void {
    this.profile = event?.target?.files[0];
  }

  becomeHost() {
    let formdata = new FormData;
    formdata.append(`car`, this.hostform.controls['car'].value);
    formdata.append(`mobile`, this.hostform.controls['mobilenumber'].value);
    formdata.append(`drivingLicense`, this.hostform.controls['license'].value);
    formdata.append(`goals`, this.hostform.controls['goals'].value);
    formdata.append(`carAvailability`, this.hostform.controls['availability'].value);
    formdata.append(`carDetail`, this.hostform.controls['details'].value);
    formdata.append(`payout`, this.hostform.controls['payout'].value);
    formdata.append(`safetyQuantity`, this.hostform.controls['qualitystandards'].value);
    formdata.append(`listing`, this.hostform.controls['submityourlisting'].value);
    formdata.append(`profile`, this.profile);

    for (let i = 0; i < this.carFiles.length; i++) {
        formdata.append(`carPhotos`, this.carFiles[i]);
    }
    
    this.httpService.httpPostFormData(ApiUrls.host.createHost,formdata).subscribe(res => {})
  }

}
