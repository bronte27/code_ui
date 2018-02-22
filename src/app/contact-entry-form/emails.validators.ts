import { AbstractControl, ValidationErrors, FormControl } from "@angular/forms";

export class EmailsValidator {
    static mismatchedEmails (control: AbstractControl) : ValidationErrors | null {
        if (control.get('email').value.trim().toLowerCase() == control.get('validateEmail').value.trim().toLowerCase()) {
            (control.get('validateEmail') as FormControl).setErrors(null);
            return null;
        }

        (control.get('validateEmail') as FormControl).setErrors({'mismatchedEmails': true});
        return {mismatchedEmails: true};
    }
} 