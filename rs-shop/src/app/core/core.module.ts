import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderCategoryNavComponent } from './components/header-category-nav/header-category-nav.component';
import { HeaderInfoComponent } from './components/header-info/header-info.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderInfoComponent,
    HeaderNavComponent,
    HeaderCategoryNavComponent
  ],
  imports: [
    CommonModule, SharedModule, RouterModule, UserModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
