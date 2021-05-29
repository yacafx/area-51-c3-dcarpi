import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Authenticate } from '@dc/models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'dc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnDestroy {
  private unsubscribe$: Subject<void> = new Subject();

  constructor(private auth: AuthService) {}

  login(auth: Authenticate): void {
    this.auth.login(auth).pipe(takeUntil(this.unsubscribe$)).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
