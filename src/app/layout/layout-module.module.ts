import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared/shared-module.module';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

const Routes = [
  { path: '', component: HomeComponent}
]

@NgModule({
  declarations: [HeaderComponent,FooterComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes),
    SharedModuleModule,MatSelectModule
  ],
  exports: [HeaderComponent,FooterComponent]
})
export class LayoutModuleModule { }
