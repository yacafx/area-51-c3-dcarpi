import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Authenticate } from '@dc/models';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'dc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  constructor(private auth: AuthService) {}

  login(auth: Authenticate): void {
    this.auth.login(auth).pipe(take(1)).subscribe();
  }
}
