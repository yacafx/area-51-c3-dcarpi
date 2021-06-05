import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Authenticate, State } from '@dc/models';
import { Store } from '@ngrx/store';
import { login } from '../../+state/auth.actions';

@Component({
  selector: 'dc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  constructor(private store: Store<State>) {}

  login(auth: Authenticate): void {
    // this.auth.login(auth).pipe(take(1)).subscribe();
    this.store.dispatch(login({ payload: auth }));
  }
}
