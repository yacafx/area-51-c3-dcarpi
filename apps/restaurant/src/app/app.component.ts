import { Component } from '@angular/core';

@Component({
  selector: 'dcarpi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'restaurant';

  constructor() {
    const greet: string[] = ['Hola', 'Mundo', 'adios'];

    this.title = `${greet[0]} ${greet[1]}!`; //?
  }

  greet(name: string): string {
    return `Hola ${name}!`;
  }
}
