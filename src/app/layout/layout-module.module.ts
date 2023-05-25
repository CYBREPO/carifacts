import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';

const Routes = [
  { path: '', component: HomeComponent}
]

@NgModule({
  declarations: [HeaderComponent,FooterComponent, HomeComponent,CardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ],
  exports: [HeaderComponent,FooterComponent]
})
export class LayoutModuleModule { }
