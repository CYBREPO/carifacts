import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared/shared-module.module';
import { CustomerLayoutComponent } from '../page-layout/customer-layout/customer-layout.component';
import { MaterialModuleModule } from '../shared/material-module.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TeamComponent } from './team/team.component';
import { ListcarsComponent } from './listcars/listcars.component';

const Routes = [
  {path: '', component: CustomerLayoutComponent, children: [
    { path: '', component: HomeComponent},
    { path: 'aboutus', component: AboutusComponent},
    { path: 'team', component: TeamComponent},
    { path: 'list-cars', component: ListcarsComponent},

  ]}
]

@NgModule({
  declarations: [HeaderComponent,FooterComponent, HomeComponent,CustomerLayoutComponent, AboutusComponent, TeamComponent, ListcarsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes),
    SharedModuleModule,
    MaterialModuleModule
  ],
  exports: [HeaderComponent,FooterComponent,CustomerLayoutComponent]
})
export class LayoutModuleModule { }
