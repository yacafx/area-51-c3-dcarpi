import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Styles } from '@dc/models';
@Component({
  selector: 'dc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text = 'Click me!';
  @Input() style: Styles = 'default';

  @Output() clicked = new EventEmitter<string>();

  notify() {
    this.clicked.emit('Somebody clicked me!');
  }
}
