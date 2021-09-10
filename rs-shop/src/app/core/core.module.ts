import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CategoryNavComponent } from './components/category-nav/category-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { HeaderComponent } from './components/header/header.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GeneralInfoComponent,
    MainNavComponent,
    CategoryNavComponent
  ],
  imports: [
    CommonModule, SharedModule, RouterModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
