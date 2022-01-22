import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private translate: TranslateService) { }

  public getErrorMessageFunction(): (formControl: AbstractControl) => string {
    const _this = this;
    return function(formControl: AbstractControl): string {
      const errors = formControl.errors;
      if (errors) {
        if (errors['required']) {
          return _this.translate.instant('forms.errors.required');
        }
        if (errors['email']) {
          return _this.translate.instant('forms.errors.email');
        }
        if (errors['requiredTrue']) {
          return _this.translate.instant('forms.errors.requiredTrue');
        }
        if (errors['minLength']) {
          return _this.translate.instant('forms.errors.minLength');
        }
        if (errors['maxLength']) {
          return _this.translate.instant('forms.errors.maxLength');
        }
        if (errors['pattern']) {
          return _this.translate.instant('forms.errors.pattern');
        }
        if (errors['notSamePassword']) {
          return _this.translate.instant('forms.errors.notSamePassword');
        }
      }
      return '';
    }
  }

}
