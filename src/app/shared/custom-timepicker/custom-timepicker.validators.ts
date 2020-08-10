import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator, FormControl } from '@angular/forms';

@Directive({
    selector: '[validateTimeRequired]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: TimeValidator, multi: true }
    ]
})

export class TimeValidator implements Validator {

    static validateTimeRequired(control: FormControl): ValidationErrors | null {
        if (control.value === null || control.value === '' || control.value === ':' || control.value === ': ') {
            return { required: true };
        }
        else if (control.value.startsWith(':') || control.value.endsWith(':')) {
            return { invalidTime: true };
        }
        else {
            return null;
        }
    }
    static validateOnlyTimeRequired(control: FormControl): ValidationErrors | null {
        
        if (control.value === null || control.value === ':') {
            return null;
        }
        else if (control.value.startsWith(':') || control.value.endsWith(':')) {
            return { invalidTime: true };
        }
        else {
            return null;
        }
    }
    validate(c: FormControl): ValidationErrors | null {
        return TimeValidator.validateTimeRequired(c);
    }
}
