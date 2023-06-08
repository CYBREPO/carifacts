import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { ComponentsRoutingModuleModule } from './components-routing-module.module';
import { SharedModuleModule } from '../shared/shared-module.module';
import { SingleCarDetailsLayoutComponent } from './single-car-details-layout/single-car-details-layout.component';
import { SingleCategoryCarDetailsComponent } from './single-category-car-details/single-category-car-details.component';
import { MaterialModuleModule } from '../shared/material-module.module';
import { MatSelectModule } from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    MapComponent, SingleCarDetailsLayoutComponent,
    SingleCategoryCarDetailsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModuleModule,GoogleMapsModule,
    SharedModuleModule,MaterialModuleModule,MatSelectModule,MatSliderModule
  ]
})
export class ComponentsModuleModule { }
