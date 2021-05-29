import 'jest-preset-angular';
import { TestBed } from '@angular/core/testing';
import { HttpRequestMocksInterceptor } from './http-request-mocks.interceptor';

describe('HttpRequestMocksInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpRequestMocksInterceptor]
    })
  );

  it('should be created', () => {
    const interceptor: HttpRequestMocksInterceptor = TestBed.inject(
      HttpRequestMocksInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
