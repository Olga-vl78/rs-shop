import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { EditFormPopupComponent } from './components/edit-form-popup/edit-form-popup.component';
import { OrderComponent } from './components/order/order.component';
import { OrdersContainerComponent } from './components/orders-container/orders-container.component';
import { WaitingListPageComponent } from './pages/waiting-list-page/waiting-list-page.component';

const routes: Routes = [{ path: '', component: WaitingListPageComponent, pathMatch: 'full' }];

@NgModule({
  declarations: [
    OrdersContainerComponent,
    WaitingListPageComponent,
    OrderComponent,
    EditFormPopupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class WaitingListModule { }
