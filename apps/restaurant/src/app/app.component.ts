import { Component } from '@angular/core';
import { TOTAL } from '@dc/ui';

@Component({
  selector: 'dc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'restaurant';
  total = TOTAL;

  constructor() {
    const greet: string[] = ['Hola', 'Mundo', 'adios'];

    this.title = `${greet[0]} ${greet[1]}!`; //?
  }

  greet(name: string): string {
    return `Hola ${name}!`;
  }
}
