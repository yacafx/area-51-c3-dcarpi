import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Authenticate, User } from '@dc/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:3000';
  private userSubject$ = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject$.asObservable();

  constructor(private http: HttpClient, private route: Router) {
    const user = localStorage.getItem('user');
    if (user) {
      this.userSubject$.next(JSON.parse(user));
    }
  }

  login(auth: Authenticate): Observable<User> {
    return this.http.post<User>(`${this.url}/login`, auth).pipe(
      tap((user: User) => {
        if (user.token) {
          this.userSubject$.next(user);
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', user.token);
        } else {
          this.userSubject$.next(null);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.userSubject$.next(null);
    this.route.navigate(['/']);
  }
}
