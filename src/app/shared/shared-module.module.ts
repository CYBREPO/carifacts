import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from './material-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardComponent } from './card/card.component';
import { CarDetailsCardComponent } from './car-details-card/car-details-card.component';
import { ConfirmComponent } from './confirm/confirm.component';



@NgModule({
  declarations: [SearchBarComponent, CardComponent, CarDetailsCardComponent,ConfirmComponent],
  imports: [
    CommonModule, MaterialModuleModule, ReactiveFormsModule
  ],
  exports: [ReactiveFormsModule, SearchBarComponent, CardComponent, CarDetailsCardComponent,ConfirmComponent]
})
export class SharedModuleModule { }
