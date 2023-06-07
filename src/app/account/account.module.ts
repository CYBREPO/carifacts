import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared/shared-module.module';
import { MaterialModuleModule } from '../shared/material-module.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes = [
  // {path: '',component: CustomerLayoutComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'reset-password/:id/:date', component: ResetPasswordComponent},
  // ]}
]

@NgModule({
  declarations: [RegisterComponent,LoginComponent,ForgotPasswordComponent, ResetPasswordComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModuleModule,MaterialModuleModule
  ]
})
export class AccountModule { }
