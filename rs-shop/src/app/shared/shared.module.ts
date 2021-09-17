import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddToBasketButtonComponent } from './components/add-to-basket-button/add-to-basket-button.component';
import { ColorDirective } from './directives/color.directive';





@NgModule({
  declarations: [
    AddToBasketButtonComponent,
    ColorDirective
  ],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, AddToBasketButtonComponent, ColorDirective],
})
export class SharedModule { }
