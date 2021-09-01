import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { CategoryNavComponent } from './components/category-nav/category-nav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GeneralInfoComponent,
    MainNavComponent,
    CategoryNavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
