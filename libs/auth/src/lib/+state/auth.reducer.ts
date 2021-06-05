import { AuthEntity, State } from '@dc/models';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: State;
}

export const authAdapter: EntityAdapter<AuthEntity> = createEntityAdapter<AuthEntity>();

export const initialState: State = authAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, loaded: false, error: null })),
  on(AuthActions.loginSuccess, (state) => ({
    ...state,
    user: AuthActions.loginSuccess,
    loaded: true
  })),
  on(AuthActions.loginFailure, (state) => ({
    ...state,
    user: null,
    loaded: false
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
