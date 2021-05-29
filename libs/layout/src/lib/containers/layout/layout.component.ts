import { Component } from '@angular/core';
import { AuthService } from '@dc/auth';

@Component({
  selector: 'dc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor(public auth: AuthService) {}
}
