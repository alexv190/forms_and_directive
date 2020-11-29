import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: 'input[validatefield]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidatefieldDirective,
      multi: true,
    },
  ],
})
export class ValidatefieldDirective implements Validator {
  @Input() pattern: string;//позволяет передать кастомный паттерн

  constructor() {}

  validate(control: AbstractControl): ValidationErrors {
    const value = control.value as string;
    const pattern = new RegExp(this.pattern);
    console.log(this.pattern);
    if (!pattern.test(value)) {
      //ошибка валидации
      return {
        validatefieldPattern: pattern.toString(),
        validatefieldCurrent: value,
      };
    }
    return null;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  registerOnValidatorChange?(fn: () => void): void {
    console.log('registerOnValidatorChange');
  }
}