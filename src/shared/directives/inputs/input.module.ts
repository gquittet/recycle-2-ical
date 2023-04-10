import { NgModule } from '@angular/core';
import { ErrorLabelDirective } from '~/shared/directives/inputs/error-label.directive';
import { InputDatalistOptionDirective } from '~/shared/directives/inputs/input-datalist-option.directive';
import { InputDatalistDirective } from '~/shared/directives/inputs/input-datalist.directive';
import { InputFieldDirective } from '~/shared/directives/inputs/input-field.directive';
import { InputDirective } from '~/shared/directives/inputs/input.directive';

@NgModule({
  declarations: [
    InputFieldDirective,
    InputDirective,
    InputDatalistDirective,
    InputDatalistOptionDirective,
    ErrorLabelDirective,
  ],
  exports: [
    InputFieldDirective,
    InputDirective,
    InputDatalistDirective,
    InputDatalistOptionDirective,
    ErrorLabelDirective,
  ],
})
export class InputModule {}
