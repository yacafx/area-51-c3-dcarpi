import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import * as AuthActions from './auth.actions';
import { AuthActionTypes } from './auth.actions';
@Injectable()
export class AuthEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.Login),
      fetch({
        run: (action) => {
          this.auth.login(action);

          //  return AuthActions.loginSuccess({ payload: user });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return AuthActions.loginFailure({ payload: error });
        }
      })
    )
  );

  navigateToProfile$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActionTypes.LoginSuccess),
        map((action: AuthActionTypes.LoginSuccess) => action),
        tap(() => this.router.navigate([`/products`]))
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private router: Router
  ) {}
}
