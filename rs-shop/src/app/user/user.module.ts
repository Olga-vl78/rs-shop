import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPopupComponent } from './components/login-popup/login-popup.component';

const routes: Routes = [
  //{ path: '', component: OrderPageComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    LoginPopupComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UserModule { }
