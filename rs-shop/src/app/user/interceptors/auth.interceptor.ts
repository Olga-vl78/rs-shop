import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('users/order')) {
      const cloned = request.clone({
        headers: request.headers.append('Authorization', `Bearer ${this.authService.userToken}`),
      });
      return next.handle(cloned);
    }
    return next.handle(request);
  }
}
