import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@dc/models';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<User>,
    next: HttpHandler
  ): Observable<HttpEvent<User>> {
    const token = localStorage.getItem('token');

    if (token) {
      const authReq = request.clone({
        headers: request.headers.set('Authorization', token)
      });
      return next.handle(authReq);
    } else {
      return next.handle(request);
    }
  }
}
