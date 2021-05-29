import {
  HttpEvent,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@dc/models';
import { Observable, of } from 'rxjs';
import { adminSuccessLogin } from './auth.mocks';

@Injectable()
export class HttpRequestMocksInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<User>): Observable<HttpEvent<User>> {
    if (
      request.url &&
      request.url.indexOf('http://localhost:3000/login') > -1
    ) {
      return of(new HttpResponse({ status: 200, body: adminSuccessLogin }));
    } else {
      return of(new HttpResponse({}));
    }
  }
}
