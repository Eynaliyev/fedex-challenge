import { FormGroup, FormControl } from '@angular/forms';

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
