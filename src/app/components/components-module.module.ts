import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { ComponentsRoutingModuleModule } from './components-routing-module.module';
import { LayoutModuleModule } from '../layout/layout-module.module';
import { SharedModuleModule } from '../shared/shared-module.module';



@NgModule({
  declarations: [
    MapComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModuleModule,
    LayoutModuleModule,
    SharedModuleModule
  ]
})
export class ComponentsModuleModule { }
