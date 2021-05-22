import { TestBed } from '@angular/core/testing';

import { HttpRequestInterceptorMocksService } from './http-request-interceptor-mocks.service';

describe('HttpRequestInterceptorMocksService', () => {
  let service: HttpRequestInterceptorMocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRequestInterceptorMocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
