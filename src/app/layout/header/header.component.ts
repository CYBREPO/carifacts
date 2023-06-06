import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hostform: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }



  initForm() {
    this.hostform = this.fb.group({
      car: [''],
      Profi: [''],
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

  becomeHost() {
    let formdata = new FormData;
    formdata.append(`car`, this.hostform.controls['car'].value)
console.log(formdata);
  }

}
