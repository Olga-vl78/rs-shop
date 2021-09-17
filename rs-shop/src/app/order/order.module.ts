import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrdersContainerComponent } from './components/orders-container/orders-container.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';

const routes: Routes = [
  { path: '', component: OrderPageComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    OrdersTableComponent,
    OrdersContainerComponent,
    OrderPageComponent,
    OrderFormComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), SharedModule
  ]
})
export class OrderModule { }
