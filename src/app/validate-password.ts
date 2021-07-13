import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
        const passwordControl = formGroup.controls[password];
        const confirmPasswordControl = formGroup.controls[confirmPassword];

        if (!passwordControl || !confirmPasswordControl) {
            return;
        }

        if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
            return;
        }

        if (passwordControl.value !== confirmPasswordControl.value) {
            confirmPasswordControl.setErrors({ passwordMismatch: true });
        } else {
            confirmPasswordControl.setErrors(null);
        }
    }
}