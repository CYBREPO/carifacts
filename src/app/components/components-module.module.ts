import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { CardComponent } from '../layout/card/card.component';



@NgModule({
  declarations: [
    MapComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModuleModule { }
