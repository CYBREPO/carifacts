import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatAutocompleteModule,MatDatepickerModule,MatProgressSpinnerModule,
    MatFormFieldModule

  ],
  exports: [MatAutocompleteModule,MatDatepickerModule,MatProgressSpinnerModule,MatFormFieldModule]
})
export class MaterialModuleModule { }
