import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { adminSuccessLogin } from './auth.mocks';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestInterceptorMocksService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      request.url &&
      request.url.indexOf('http://localhost:3000/login') > -1
    ) {
      return of(new HttpResponse({ status: 200, body: adminSuccessLogin }));
    }
  }
}
