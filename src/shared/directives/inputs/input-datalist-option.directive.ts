import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'input-field input + datalist option',
})
export class InputDatalistOptionDirective {
  @HostBinding('class') get classes(): string {
    return 'cursor-pointer hover:bg-gray-100 p-2';
  }
}
