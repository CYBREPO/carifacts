import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from './material-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [SearchBarComponent,CardComponent],
  imports: [
    CommonModule,MaterialModuleModule,ReactiveFormsModule
  ],
  exports: [ReactiveFormsModule,SearchBarComponent,CardComponent]
})
export class SharedModuleModule { }
