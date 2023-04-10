import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'button',
})
export class ButtonDirective {
  @HostBinding('class') get classes(): string {
    return 'flex items-center justify-between gap-2 cursor-pointer rounded px-3 py-2';
  }
}
