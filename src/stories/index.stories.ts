import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../../projects/button/src/lib/button.component';
storiesOf('my-lib', module)
.add('button', () => ({
  component: ButtonComponent,
  props:{
    text: "Hello",
    click: action("You clicked me...")
  }
}));
