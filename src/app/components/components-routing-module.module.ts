import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SingleCategoryCarDetailsComponent } from './single-category-car-details/single-category-car-details.component';
import { CustomerLayoutComponent } from '../page-layout/customer-layout/customer-layout.component';
import { AssociateStatesComponent } from './associate-states/associate-states.component';
import { DetailsComponent } from './details/details.component';

const routes = [
  {
    path: "", component: CustomerLayoutComponent, children: [
      { path: "category", component: SingleCategoryCarDetailsComponent },
      { path: "category/:id", component: SingleCategoryCarDetailsComponent },
      { path: "associate-states", component: AssociateStatesComponent },
      { path: "details/:id", component: DetailsComponent },


    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentsRoutingModuleModule { }
