import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared/shared-module.module';
import { DashboardComponent } from './dashboard.component';

const Routes = [
  { path: '', component: DashboardComponent }
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, RouterModule.forChild(Routes)
  ]
})

export class DashboardModuleModule { }
