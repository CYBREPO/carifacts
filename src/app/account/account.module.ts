import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CustomerLayoutComponent } from '../page-layout/customer-layout/customer-layout.component';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared/shared-module.module';
import { MaterialModuleModule } from '../shared/material-module.module';

const routes = [
  // {path: '',component: CustomerLayoutComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
  // ]}
]

@NgModule({
  declarations: [RegisterComponent,LoginComponent,ForgotPasswordComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModuleModule,MaterialModuleModule
  ]
})
export class AccountModule { }
