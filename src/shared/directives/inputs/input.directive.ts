import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[disabledControl]',
})
export class InputDirective {
  @Input() set disabledControl(shouldDisable: boolean) {
    shouldDisable ? this.control.control?.disable() : this.control.control?.enable();
  }

  constructor(private readonly control: NgControl) {}
}
