import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModuleModule } from './components-routing-module.module';
import { SharedModuleModule } from '../shared/shared-module.module';
import { SingleCategoryCarDetailsComponent } from './single-category-car-details/single-category-car-details.component';
import { MaterialModuleModule } from '../shared/material-module.module';
import { MatSelectModule } from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    SingleCategoryCarDetailsComponent,DetailsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModuleModule,
    SharedModuleModule,MaterialModuleModule,MatSelectModule,MatSliderModule,
  ]
})
export class ComponentsModuleModule { }
