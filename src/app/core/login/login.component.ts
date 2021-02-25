import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { catchError, map, tap } from 'rxjs/operators';
// import { map, filter } from 'rxjs/operators';

import { LoggerService } from '../../logger.service';
import { AuthService } from '../../api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  // email = new FormControl('', [Validators.required, Validators.email]);
  email = new FormControl('', [Validators.required]);

  constructor(
    private logger: LoggerService,
    fb: FormBuilder,
    private auth: AuthService
  ) {
    this.form = fb.group({
      email: this.email,
      password: ['', Validators.required],
    });

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

  ngOnInit() {
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

  onSubmit() {
    if (this.form.valid) {
      this.logger.log('call api. form.value:', this.form.value);
      this.auth.callAuthLogin(this.form.value);
    }
  }

  fullUpdate() {
    this.form.setValue({email: 'admin', password: 'test'});
  }

  partialUpdate() {
    this.form.patchValue({email: 'admin'});
  }

  reset() {
    this.form.reset();
  }

  admin() {
    this.form.setValue({email: 'admin', password: 'test'});
  }

  aarticci() {
    this.form.setValue({email: 'aarticci', password: 'test'});
  }

  amontanari() {
    this.form.setValue({email: 'amontanari', password: 'test'});
  }

}
