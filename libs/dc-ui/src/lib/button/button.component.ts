import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  getLabel(name: string): string {
    const label = 'Hola';

    return `${label} ${name}`;
  }
}
