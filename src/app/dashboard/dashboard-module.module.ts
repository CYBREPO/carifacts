import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared/shared-module.module';
import { DashboardComponent } from './dashboard.component';
import { AdminLayoutComponent } from '../page-layout/admin-layout/admin-layout.component';
import { MaterialModuleModule } from '../shared/material-module.module';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { CarCompaniesComponent } from './car-companies/car-companies.component';
import { TableComponent } from './table/table.component';
import { ChangePasswordComponent } from './account/change-password/change-password.component';
import { EditProfileComponent } from './account/edit-profile/edit-profile.component';
import { CarModelsComponent } from './car-models/car-models.component';
import { ManageCarsComponent } from './manage-cars/manage-cars.component';

const Routes = [
  {path: '', component: AdminLayoutComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'companies', component: CarCompaniesComponent},
    { path: 'models', component: CarModelsComponent},
    { path: 'mangeCars', component: ManageCarsComponent},
    { path: "**", redirectTo: 'dashboard'}
  ]}
]

@NgModule({
  declarations: [DashboardComponent,AdminLayoutComponent, SideNavbarComponent, 
    TopNavbarComponent, CarCompaniesComponent, TableComponent, ChangePasswordComponent, EditProfileComponent, CarModelsComponent, ManageCarsComponent,
  ],
  imports: [
    CommonModule, RouterModule.forChild(Routes),
    SharedModuleModule,MaterialModuleModule,
    GooglePlaceModule,
  ]
})

export class DashboardModuleModule { }
