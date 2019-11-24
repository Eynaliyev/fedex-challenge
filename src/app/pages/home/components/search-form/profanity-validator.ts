import { ValidatorFn, AbstractControl } from '@angular/forms';
import Filter from 'bad-words';

export const profanityValidator = (): ValidatorFn => {
  const filter = new Filter();
  return (control: AbstractControl): { [key: string]: any } | null => {
    return filter.isProfane(control.value) ? { 'profanity': { value: control.value } } : null;
  };
};
