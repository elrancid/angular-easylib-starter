import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormManagerComponent } from '@easylib/core';
import { Router } from '@angular/router';
import { ComponentTab, OnComponentTabActivate } from '@easylib/material';
// import { catchError, map, tap } from 'rxjs/operators';
// import { map, filter } from 'rxjs/operators';

// import { LoggableComponent } from '@easylib/log';
// import { AuthService } from 'src/app/core/auth/auth.service';
import { AuthService } from 'src/app/core/auth/auth.service';
import { FormStructure } from '@easylib/core';
import { TranslateService } from '@ngx-translate/core';
import { FormService } from 'src/app/core/services/form/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
// export class LoginComponent extends LoggableComponent implements OnInit {
export class LoginComponent extends FormManagerComponent implements OnInit, OnDestroy {

  @Input() override logs = false;
  // @Input() logsForm = true;

  public errorMessage: string = '';

  // form: FormGroup;
  // email = new FormControl('', [Validators.required, Validators.email]);
  // email = new FormControl('', [Validators.required]);

  protected formStructure: FormStructure = {
    email: {
      type: 'string',
      required: true,
      email: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  };

  constructor(
    private auth: AuthService,
    // private router: Router,
    public translate: TranslateService,
    public formService: FormService,
  ) {
    super();
    this.log('LoginComponent.constructor()');
    // this.form = fb.group({
    //   email: this.email,
    //   password: ['', Validators.required],
    // });

    // // Subscribe to the Form stream of values
    // this.form.valueChanges
    // .map((value) => {
    //   value.firstName = value.firstName.toUpperCase();
    //   return value;
    // })
    // .filter((value) => this.form.valid)
    // .subscribe((value) => {
    //   console.log('Model Driven Form valid value: vm = ', JSON.stringify(value));
    // });
  }

  override ngOnInit() {
    this.log('LoginComponent.ngOnInit()');
    super.ngOnInit();
    // this.form.valueChanges
    // .map((value) => {
    //     value.email = value.email.toUpperCase();
    //     return value;
    // })
    // .filter((value) => this.form.valid)
    // .subscribe((value) => {
    //     console.log('Model Driven Form valid value: vm = ', JSON.stringify(value));
    // });
  }

  override ngOnDestroy(): void {
    this.log('LoginComponent.ngOnDestroy()');
    super.ngOnDestroy();
  }

  // onSubmit() {
  //   this.log('LoginComponent.onSubmit() formData:', this.formData);
  //   this.login(this.formData);
  //   // if (this.form.valid) {
  //   //   this.log('call api. form.value:', this.form.value);
  //   //   // this.auth.callAuthLogin(this.form.value);
  //   // }
  // }
  submit() {
    this.log('LoginComponent.submit() formData:', this.formData);
    this.login(this.formData);
  }

  protected override onFormDataChanged(formData: any, oldFormData: any): void {
    this.log('LoginComponent.onFormDataChanged() formData:', formData, 'oldFormData:', oldFormData);
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

  // private login(email: string, password: string) {
  private login(credentials: Record<string, any>) {
    this.log('LoginComponent.login() credentials:', credentials);
    // if (!email || !password) {
    //   this.messages.push('Incomplete credentials!');
    //   return;
    // }
    // try to authenticate with feathers
    this.auth.login(credentials)
    // navigate to base URL on success
    .then((result: any) => {
      this.log('LoginComponent.login() login success result:', result);
      // this.router.navigate(['/']);
      this.errorMessage = '';
    })
    .catch((error: any) => {
      this.log('LoginComponent.login() wrong credentials. error:', error);
      // this.messages.unshift('Wrong credentials!');
      this.errorMessage = this.translate.instant('errors.' + error.code);
    });
  }

}
