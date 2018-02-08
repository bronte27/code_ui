import { AbstractControl, ValidationErrors, FormControl } from "@angular/forms";

export class EmailsValidator {
    static mismatchedEmails (control: AbstractControl) : ValidationErrors | null {
        if (control.get('email').value == control.get('validateEmail').value)
            return null;

        (control.get('validateEmail') as FormControl).setErrors({'mismatchedEmails': true})
        return {mismatchedEmails: true};
    }
}