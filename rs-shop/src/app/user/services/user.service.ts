import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUserAuth } from '../models/user-auth.model';
import { IUserInfo } from '../models/user-info.model';
import { AuthService } from './auth.service';

const BASEURL = 'http://localhost:3004';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService
  ) { }



  addUser(user: IUserInfo): Promise<any> {
    return this.http.post<IUserInfo>(`${BASEURL}/users/register`, user) //, this.getHeaders())
      .pipe(
        catchError(this.handleError))
      .toPromise();
  }

  loginUser(user: IUserAuth): Promise<any> {
    return this.http.post<IUserAuth>(`${BASEURL}/users/login`, user)
      .pipe(
        catchError(this.handleError))
      .toPromise();
  }

  getUsers() {
    return this.http.get<any>(`${BASEURL}/users`)
      .pipe(
        catchError(this.handleError))
      .toPromise();
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was:`, error.error);
    }
    return throwError('Something bad happens; please try again later');
  }

}
