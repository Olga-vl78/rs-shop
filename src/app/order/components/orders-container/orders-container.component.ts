import { Component, OnInit } from '@angular/core';
import { PagesDataService } from 'src/app/core/services/pages-data.service';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-orders-container',
  templateUrl: './orders-container.component.html',
  styleUrls: ['./orders-container.component.scss'],
})
export class OrdersContainerComponent implements OnInit {
  isCheckout: boolean = false;

  isEmpty: boolean = true;

  constructor(
    private readonly pagesDataService: PagesDataService,
    private readonly authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.checkOrderedItems();
  }

  get orderedItems() {
    return this.pagesDataService.orderedItems;
  }

  get $isLogin() {
    return this.authService.$isLogin;
  }

  get $isAuth() {
    return this.authService.$isAuth;
  }

  onCheckoutBtnClick() {
    this.isCheckout = true;
  }

  onLoginBtnClick() {
    this.authService.isAuthorization();
  }

  checkOrderedItems() {
    if (this.orderedItems.length === 0) this.isEmpty = true;
    else this.isEmpty = false;
  }
}
