import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { ComponentsRoutingModuleModule } from './components-routing-module.module';



@NgModule({
  declarations: [
    MapComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModuleModule
  ]
})
export class ComponentsModuleModule { }
