import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared/shared-module.module';
import { DashboardComponent } from './dashboard.component';
import { AdminLayoutComponent } from '../page-layout/admin-layout/admin-layout.component';
import { MaterialModuleModule } from '../shared/material-module.module';

const Routes = [
  {path: '', component: AdminLayoutComponent, children: [
    { path: '', component: DashboardComponent }
  ]}
]

@NgModule({
  declarations: [DashboardComponent,AdminLayoutComponent],
  imports: [
    CommonModule, RouterModule.forChild(Routes),
    SharedModuleModule,MaterialModuleModule
  ]
})

export class DashboardModuleModule { }
