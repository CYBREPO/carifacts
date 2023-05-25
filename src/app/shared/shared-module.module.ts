import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from './material-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,MaterialModuleModule,ReactiveFormsModule
  ],
  exports: [ReactiveFormsModule,SearchBarComponent]
})
export class SharedModuleModule { }
