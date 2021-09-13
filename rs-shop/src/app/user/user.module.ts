import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    OrderPageComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UserModule { }
