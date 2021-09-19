import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { OrdersContainerComponent } from './components/orders-container/orders-container.component';
import { WaitingListPageComponent } from './pages/waiting-list-page/waiting-list-page.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  { path: '', component: WaitingListPageComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    OrderItemComponent,
    OrdersContainerComponent,
    WaitingListPageComponent,
    OrderComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), SharedModule
  ]
})
export class WaitingListModule { }
