import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatAutocompleteModule, MatDatepickerModule, MatProgressSpinnerModule,
    MatFormFieldModule, MatNativeDateModule,MatSelectModule,MatDialogModule,FormsModule

  ],
  exports: [MatAutocompleteModule, MatDatepickerModule, MatProgressSpinnerModule, MatFormFieldModule,
    MatSelectModule,MatDialogModule,FormsModule],
  providers: [
    MatDatepickerModule,
  ],
})
export class MaterialModuleModule { }
