import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    MapComponent,
    CardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModuleModule { }
