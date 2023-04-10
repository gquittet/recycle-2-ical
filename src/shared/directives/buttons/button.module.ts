import { NgModule } from '@angular/core';
import { ButtonDisabledDirective } from '~/shared/directives/buttons/button-disabled.directive';
import { ButtonPrimaryDirective } from '~/shared/directives/buttons/button-primary.directive';
import { ButtonDirective } from '~/shared/directives/buttons/button.directive';

@NgModule({
  declarations: [ButtonDirective, ButtonDisabledDirective, ButtonPrimaryDirective],
  exports: [ButtonDirective, ButtonDisabledDirective, ButtonPrimaryDirective],
})
export class ButtonModule {}
