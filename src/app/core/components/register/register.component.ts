import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { FormManagerComponent } from '@easylib/core';
import { ComponentTab, OnComponentTabActivate } from '@easylib/material';
// import { catchError, map, tap } from 'rxjs/operators';
// import { map, filter } from 'rxjs/operators';

// import { LoggableComponent } from '@easylib/log';
import { AuthService } from 'src/app/core/feathers/auth.service';
import { FormStructure } from '@easylib/core';
import { TranslateService } from '@ngx-translate/core';
import { FormService } from 'src/app/core/services/form/form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
// export class RegisterComponent extends LoggableComponent implements OnInit {
export class RegisterComponent extends FormManagerComponent implements OnInit, OnDestroy {

  @Input() override logs = true;

  protected formStructure: FormStructure = {
    email: {
      type: 'string',
      required: true,
      email: true,
    },
    password: {
      type: 'string',
      required: true,
      // pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/,
      pattern: /^(?=.*[A-Zaz\d])[A-Za-z\d@$!%*#?&^_-]{4,}$/,
    },
    samepassword: {
      type: 'string',
      required: true,
      validation: this.checkSamePassword(),
    },
  };

  constructor(
    private auth: AuthService,
    public translate: TranslateService,
    public formService: FormService,
  ) {
    super();
    this.log('RegisterComponent.constructor()');
  }

  override ngOnInit() {
    this.log('RegisterComponent.ngOnInit()');
    super.ngOnInit();
  }

  override ngOnDestroy(): void {
    this.log('RegisterComponent.ngOnDestroy()');
    super.ngOnDestroy();
  }

  submit() {
    this.log('RegisterComponent.submit() formData:', this.formData);
    this.register(this.formData);
  }

  private register(credentials: any) {
    this.log('LoginComponent.register() credentials:', credentials);
      if (this.form?.valid) {
      this.log('call api. form.value:', this.form.value);
      this.auth.register({
        email: credentials.email,
        password: credentials.password,
      })
      // navigate to base URL on success
      .then((result: any) => {
        this.log('LoginComponent.register() result:', result);
        // this.router.navigate(['/']);
      })
      .catch((error: Error) => {
        this.log('LoginComponent.register() error:', error);
        // this.messages.unshift('Wrong credentials!');
      });
    }
    // if (!email || !password) {
    //   this.messages.push('Incomplete credentials!');
    //   return;
    // }
    // this.auth.login(credentials)
    // .then(() => {
    //   this.log('LoginComponent.login() login success');
    //   // this.router.navigate(['/']);
    // })
    // .catch(err => {
    //   this.log('LoginComponent.login() wrong credentials');
    //   // this.messages.unshift('Wrong credentials!');
    // });
  }

  protected override onFormDataChanged(formData: any, oldFormData: any): void {
    // this.log('RegisterComponent.onFormDataChanged() formData:', formData, 'oldFormData:', oldFormData);
  }

  fullUpdate() {
    // this.form.setValue({email: 'admin', password: 'test'});
  }

  partialUpdate() {
    // this.form.patchValue({email: 'admin'});
  }

  override reset() {
    // this.form.reset();
  }

  admin() {
    // this.form.setValue({email: 'admin', password: 'test'});
  }

  /**
   * Validation to check if the two password are equals
   * @returns 
   */
  checkSamePassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // console.log('checkSamePassword() formData:', this.formData);
      // console.log('checkSamePassword() control.value:', control.value);
      if (this.formData['password'] !== control.value) {
        return { notSamePassword: true };
      }
      return null;
    };
  }

}
