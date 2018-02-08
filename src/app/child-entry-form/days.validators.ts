import { AbstractControl, ValidationErrors } from "@angular/forms";

export class DaysValidator {
    static dayMustBeSelected (control: AbstractControl) : ValidationErrors | null {
        if (control.get('mon').value || control.get('tue').value || control.get('wed').value || control.get('thu').value || control.get('fri').value)
            return null;

        return {dayMustBeSelected: true};
    }
}