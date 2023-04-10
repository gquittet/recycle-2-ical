import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'input-field input + datalist',
})
export class InputDatalistDirective {
  @HostBinding('class') get classes(): string {
    return 'block w-full rounded-lg border-2 px-3 py-1 h-48 overflow-y-scroll divide-y divide-solid';
  }
}
