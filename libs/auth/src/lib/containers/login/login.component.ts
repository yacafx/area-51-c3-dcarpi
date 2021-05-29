import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Authenticate } from '@dc/models';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'dc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  login(auth: Authenticate): void {
    this.subscription.add(this.auth.login(auth).subscribe());
    this.subscription.add(this.auth.login(auth).subscribe());
    this.subscription.add(this.auth.login(auth).subscribe());
    this.subscription.add(this.auth.login(auth).subscribe());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
