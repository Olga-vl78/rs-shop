import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userHash: string = '';

  userEmail: string = 'Your name';

  $isAuth = new BehaviorSubject<boolean>(false);

  $isLogin = new BehaviorSubject<boolean>(false);

  login(email: string, password: string) {
    this.userHash = btoa(`${email}:${password}`);
    this.userEmail = email;
    this.$isAuth.next(true);
    localStorage.setItem(this.userHash, `${email}`);
  }

  logout() {
    if (this.isUserHash()) localStorage.removeItem(this.userHash);
    this.userHash = '';
    this.userEmail = '';
    this.$isAuth.next(false);
    this.$isLogin.next(false);
  }

  get authToken() {
    return this.userHash;
  }

  isUserHash() {
    return this.userHash && Object.keys(localStorage);
  }
}
