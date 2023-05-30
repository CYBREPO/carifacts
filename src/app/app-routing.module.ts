import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./layout/layout-module.module').then(m => m.LayoutModuleModule)}, 
  { path: 'comp', loadChildren: () => import('./components/components-module.module').then(m => m.ComponentsModuleModule)}, 
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard-module.module').then(m => m.DashboardModuleModule)}, 
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
