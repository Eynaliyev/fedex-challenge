import { FormGroup, FormControl } from '@angular/forms';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import Filter from 'bad-words';

export const validateAllFormFields = (formGroup: FormGroup): boolean => {
  let isValid = true;
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);

    if (control instanceof FormControl) {
      if (control.errors) {
        isValid = false;
      }
    } else if (control instanceof FormGroup) {
      validateAllFormFields(control);
    }
  });
  return isValid;
}

export const profanityValidator = (): ValidatorFn => {
  const filter = new Filter();
  return (control: AbstractControl): { [key: string]: any } | null => {
    return filter.isProfane(control.value) ? { 'profanity': { value: control.value } } : null;
  };
};
