import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken: string = '';

  userLogin: string = 'Your name';

  $isAuth = new BehaviorSubject<boolean>(false);

  $isLogin = new BehaviorSubject<boolean>(false);

  $isRegistration = new BehaviorSubject<boolean>(false);

  login(login: string, password: string) {
    this.userLogin = login;
    this.$isLogin.next(true);
    this.$isAuth.next(false);
    localStorage.setItem(this.userLogin, `${password}`);
  }

  logout() {
    if (this.isUserLogin()) {
      localStorage.removeItem(this.userLogin);
    }
    this.userLogin = '';
    this.$isAuth.next(false);
    this.$isLogin.next(false);
  }


  getAuthHeaders(): { [key: string]: string } {
    if (this.userToken) {
      console.log('headers', this.userToken)
      return {
        'Authorization': `Bearer ${this.userToken}`
      }
    } else {
      return {};
    }
  }

  isUserLogin() {
    return this.userLogin && Object.keys(localStorage);
  }

  isAuthorization() {
    this.$isAuth.next(true);
  }

  isNotAuthorization() {
    this.$isAuth.next(false);
  }
}
