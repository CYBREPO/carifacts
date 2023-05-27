import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { RouterModule } from '@angular/router';
import { SingleCarDetailsLayoutComponent } from './single-car-details-layout/single-car-details-layout.component';

const routes = [
  // {path: "",children: [
    {path: "map", component: MapComponent} ,
    {path: "cardetails", component: SingleCarDetailsLayoutComponent} 

  // ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentsRoutingModuleModule { }
