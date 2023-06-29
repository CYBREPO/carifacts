import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SingleCategoryCarDetailsComponent } from './single-category-car-details/single-category-car-details.component';
import { CustomerLayoutComponent } from '../page-layout/customer-layout/customer-layout.component';

const routes = [
  {path: "",component: CustomerLayoutComponent,children: [
    {path: "category", component: SingleCategoryCarDetailsComponent},
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentsRoutingModuleModule { }
