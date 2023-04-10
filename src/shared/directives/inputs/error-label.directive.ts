import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'input-field error',
})
export class ErrorLabelDirective {
  @HostBinding('class') get classes(): string {
    return 'ml-2 mt-2 block text-sm text-red-500';
  }
}
