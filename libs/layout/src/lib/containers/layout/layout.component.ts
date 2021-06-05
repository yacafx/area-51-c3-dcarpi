import { Component } from '@angular/core';
import { AuthService, productsQuery } from '@dc/auth';
import { State, User } from '@dc/models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'dc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  user$: Observable<User>;

  constructor(private store: Store<State>, public auth: AuthService) {
    this.user$ = this.store.select(productsQuery.getUser);
  }
}
