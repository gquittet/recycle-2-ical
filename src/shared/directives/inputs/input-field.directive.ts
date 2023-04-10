import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'input-field',
})
export class InputFieldDirective {
  @HostBinding('class') get classes(): string {
    return 'relative w-full';
  }
}
