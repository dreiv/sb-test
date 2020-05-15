import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
   <button [disabled]="disabled">{{text}}</button>
  `,
  styles: [`
    button {
      background: lime;
    }`
  ]
})
export class ButtonComponent {
  @Input() text: string;
  @Input() disabled: boolean;
}
