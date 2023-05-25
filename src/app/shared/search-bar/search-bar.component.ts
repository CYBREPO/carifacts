import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { locations } from 'src/app/constants/constant';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchForm: FormGroup;
  locations: Array<any> = locations.locations;
  // "Lexus/Toyota","Mercedes Benz/BMW","Acura/Honda","Infiniti/Nissan"
  isLocationLoading: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
    this.initiseTypeAhead();
  }

  initForm(){
    this.searchForm = this.fb.group({
      location: [''],
      startDate: [''],
      endDate: [''],
    });
  }

  initiseTypeAhead(){
    this.searchForm.controls['location'].valueChanges.pipe(debounceTime(500)).subscribe(res => {
      if(typeof res === "string" && res.length > 0){
        this.isLocationLoading = true;
        this.locations = locations.locations.filter(m => m.title.toLowerCase().includes(res.toLowerCase()));
        this.isLocationLoading = false;
      }
    })
  }

  onSubmit(){
    
  }

}
