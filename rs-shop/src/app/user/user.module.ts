import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPopupComponent } from './components/login-popup/login-popup.component';
import { RegistrationPopupComponent } from './components/registration-popup/registration-popup.component';

const routes: Routes = [
  //{ path: '', component: OrderPageComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    LoginPopupComponent,
    RegistrationPopupComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [
    LoginPopupComponent
  ]
})
export class UserModule { }
