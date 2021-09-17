import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddToBasketButtonComponent } from './components/add-to-basket-button/add-to-basket-button.component';





@NgModule({
  declarations: [
    AddToBasketButtonComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, AddToBasketButtonComponent],
})
export class SharedModule { }
