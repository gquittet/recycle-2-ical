import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { faArrowRight, faCalendarDays, faGear } from '@fortawesome/free-solid-svg-icons';
import type { MaskitoOptions } from '@maskito/core';
import { maskitoWithPlaceholder } from '@maskito/kit';
import { RecycleService } from '~/app/recycle.service';
import { ToFormControls } from '~/utils/type-utils';

type Form = {
  postalCode: number | null;
  street: string | null;
  house: number | null;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'recycle';
  gearIcon = faGear;
  arrowRightIcon = faArrowRight;
  calendarDaysIcon = faCalendarDays;
  readonly postalCodeMask: MaskitoOptions = {
    ...maskitoWithPlaceholder('0000'),
    mask: [/[1-9]/, /\d/, /\d/, /\d/],
  };

  readonly houseMask: MaskitoOptions = {
    mask: /^\d\d?\d?$/,
  };
  readonly postalCodeValidators = Validators.compose([
    Validators.required,
    Validators.min(1000),
    Validators.max(9999),
  ]) as ValidatorFn;

  readonly houseValidators = Validators.compose([
    Validators.required,
    Validators.min(1),
    Validators.max(999),
  ]) as ValidatorFn;

  form = new FormGroup<ToFormControls<Form>>({
    postalCode: new FormControl(null, { validators: this.postalCodeValidators }),
    street: new FormControl({ value: null, disabled: true }, { validators: [Validators.required] }),
    house: new FormControl({ value: null, disabled: true }, { validators: this.houseValidators }),
  });

  constructor(private readonly recycleService: RecycleService) {}

  async ngOnInit() {
    this.recycleService.getPostalCodeId(1234).subscribe((token) => {
      console.log('Successfully logged', token);
    });
  }
}
