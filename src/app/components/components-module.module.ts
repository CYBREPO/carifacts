import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { ComponentsRoutingModuleModule } from './components-routing-module.module';
import { SharedModuleModule } from '../shared/shared-module.module';
import { SingleCarDetailsLayoutComponent } from './single-car-details-layout/single-car-details-layout.component';



@NgModule({
  declarations: [
    MapComponent,SingleCarDetailsLayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModuleModule,
    SharedModuleModule
  ]
})
export class ComponentsModuleModule { }
