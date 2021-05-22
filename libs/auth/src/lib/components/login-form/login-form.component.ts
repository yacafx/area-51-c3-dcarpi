import { Component, EventEmitter, Output } from '@angular/core';
import { Authenticate } from '@dc/models';

@Component({
  selector: 'dc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() submit = new EventEmitter<Authenticate>();

  login(auth: Authenticate): void {
    this.submit.emit(auth);
  }
}
