import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[button-primary]',
})
export class ButtonPrimaryDirective {
  @HostBinding('class') get classes(): string {
    return 'bg-blue-500 text-white hover:bg-blue-600';
  }
}
