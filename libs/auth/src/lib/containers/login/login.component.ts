import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Authenticate } from '@dc/models';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'dc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  login(auth: Authenticate): void {
    this.auth.login(auth).subscribe();
  }
}
