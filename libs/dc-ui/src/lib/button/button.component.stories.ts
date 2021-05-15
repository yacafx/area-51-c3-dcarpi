import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { ButtonComponent } from './button.component';

export default {
  title: 'common/button',
  component: ButtonComponent
};

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    text: text('text', 'Click me!'),
    style: select(
      'style',
      {
        default: 'default',
        primary: 'primary',
        warning: 'warning',
        danger: 'danger'
      },
      'default'
    ),
    visible: boolean('visible', true),
    clicked: action('clicked')
  }
});
