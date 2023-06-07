import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./layout/layout-module.module').then(m => m.LayoutModuleModule)}, 
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)}, 
  { path: 'cust', loadChildren: () => import('./components/components-module.module').then(m => m.ComponentsModuleModule)}, 
  { path: 'admin', loadChildren: () => import('./dashboard/dashboard-module.module').then(m => m.DashboardModuleModule), canActivate: [AuthGuard]}, 
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
