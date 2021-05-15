import { Component } from '@angular/core';

@Component({
  selector: 'dc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  getLabel(name: string): string {
    const label = 'Hola';

    return `${label} ${name}`;
  }
}
