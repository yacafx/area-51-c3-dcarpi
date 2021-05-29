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
    req: HttpRequest<User>,
    next: HttpHandler
  ): Observable<HttpEvent<User>> {
    const token = localStorage.getItem('token');

    if (token) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', token)
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
