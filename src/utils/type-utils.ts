import {
  FormArray,
  FormControl,
  FormControlOptions,
  FormControlState,
  FormGroup,
} from '@angular/forms';

/**
 * Convert TypeScript type into Angular Form type.
 * - Convert T[] -> FormArray<ToFormGroup<T>>
 * - Convert T -> FormControl<T>
 */
export type ToFormControls<T> = {
  [key in keyof T]: T[key] extends (infer U extends object)[]
    ? FormArray<ToFormGroup<U>>
    : FormControl<T[key]>;
};
export type ToFormGroup<T> = FormGroup<ToFormControls<T>>;

export class NonNullableFormControl<T> extends FormControl {
  constructor(value: T | FormControlState<T>, opts: FormControlOptions = {}) {
    opts.nonNullable = true;
    super(value, opts);
  }
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};
