import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLayoutComponent } from '../page-layout/customer-layout/customer-layout.component';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared/shared-module.module';
import { GradeComponent } from './grade/grade.component';
import { BannerComponent } from './banner/banner.component';

const routes = [
  {
    path: "", component: CustomerLayoutComponent, children: [
      { path: "banner/:id", component: BannerComponent },
      { path: "sub", component: GradeComponent },
      { path: "sub/:id", component: GradeComponent },
      // { path: "sub/:id/:submenu", component: GradeComponent },

    ]
  }
]

@NgModule({
  declarations: [GradeComponent, BannerComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModuleModule
  ]
})
export class GradeModule { }
