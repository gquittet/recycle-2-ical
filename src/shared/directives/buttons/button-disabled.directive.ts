import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'button[disabled]',
})
export class ButtonDisabledDirective {
  @HostBinding('class') get classes(): string {
    return 'disabled:bg-gray-300 disabled:text-white disabled:cursor-default';
  }
}
