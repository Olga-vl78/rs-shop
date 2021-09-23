import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUserAuth } from '../models/user-auth.model';
import { IUserInfo } from '../models/user-info.model';
import { IUserOrder } from '../models/user-order.model';
import { AuthService } from './auth.service';

const BASEURL = '';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient, private readonly authService: AuthService) {}

  getHeaders(): { headers: { [header: string]: string } } {
    return {
      headers: {
        ...this.authService.getAuthHeaders(),
        'Content-Type': 'application/json',
      },
    };
  }

  addUser(user: IUserInfo): Promise<any> {
    return this.http
      .post<IUserInfo>(`${BASEURL}/users/register`, user) 
      .pipe(catchError(this.handleError))
      .toPromise();
  }

  loginUser(user: IUserAuth): Promise<any> {
    return this.http
      .post<IUserAuth>(`${BASEURL}/users/login`, user)
      .pipe(catchError(this.handleError))
      .toPromise();
  }

  getUsers() {
    return this.http.get(`${BASEURL}/users`).pipe(catchError(this.handleError)).toPromise();
  }

  addOrder(order: IUserOrder) {
    return this.http
      .post(`${BASEURL}/users/order`, order, { ...this.getHeaders(), responseType: 'text' })
      .pipe(catchError(this.handleError))
      .toPromise();
  }

  getUserInfo() {
    return this.http
      .get(`${BASEURL}/users/userInfo`, this.getHeaders())
      .pipe(catchError(this.handleError))
      .toPromise();
  }

  deleteOrder(id: string) {
    return this.http
      .delete(`${BASEURL}/users/order?id=${id}`, this.getHeaders())
      .pipe(catchError(this.handleError))
      .toPromise();
  }

  updateOrder(order: IUserOrder) {
    return this.http
      .put(`${BASEURL}/users/order`, order, this.getHeaders())
      .pipe(catchError(this.handleError))
      .toPromise()
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was:`, error.error);
      if (error.error === 'Wrong username or password') {
        alert('Неверный логин или пароль. Пожалуйста, введдите верные данные или пройдите регистрацию.');
      }
    }
    return throwError('Something bad happens; please try again later');
  }
}
