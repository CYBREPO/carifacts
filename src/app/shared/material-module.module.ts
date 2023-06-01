import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatAutocompleteModule, MatDatepickerModule, MatProgressSpinnerModule,
    MatFormFieldModule, MatNativeDateModule,MatSelectModule

  ],
  exports: [MatAutocompleteModule, MatDatepickerModule, MatProgressSpinnerModule, MatFormFieldModule,
    MatSelectModule],
  providers: [
    MatDatepickerModule,
  ],
})
export class MaterialModuleModule { }
