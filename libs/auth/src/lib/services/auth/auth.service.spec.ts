import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
// import { HttpRequestInterceptorMocksService, } from '@dc/mocks';
import {
  adminSuccessLogin,
  adminUserCredentials,
  HttpRequestInterceptorMocksService
} from '@dc/mocks';
import { User } from '@dc/models';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpRequestInterceptorMocksService,
          multi: true
        }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a succesful login', (done) => {
    service
      .login(adminUserCredentials)
      .subscribe((loggedUser: Omit<User, 'password'>) => {
        expect(loggedUser).toBe(adminSuccessLogin);
        done();
      });
  });
});
