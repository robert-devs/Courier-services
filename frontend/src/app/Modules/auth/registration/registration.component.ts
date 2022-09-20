import { Component, OnInit } from '@angular/core';
import {
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from 'src/app/state/auth.actions';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  constructor(private FB: FormBuilder, private store: Store) {}
  allowedEmails = ['@'];
  pattern = [Validators.pattern('^[A-Za-z0-9._%+-]+@thejitu.com$')];
  ngOnInit(): void {
    this.form = this.FB.group({
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      email: [
        null,
        [Validators.required, Validators.email],
        this.checkEmails.bind(this) as AsyncValidatorFn,
      ],
      password: [
        null,
        [Validators.required, Validators.pattern('^[A-Z0-9._%+-]')],
      ],
      phone: [null, [Validators.required, Validators]],
    });
  }
  onSubmit() {
    // this.store.dispatch(AuthActions.loginUser())
  }
  checkEmails(control: FormControl): Promise<{ [s: string]: boolean } | null> {
    const promise = new Promise<{ [s: string]: boolean } | null>(
      (resolve, reject) => {
        setTimeout(() => {
          if (this.allowedEmails.includes(control.value)) {
            resolve({ unallowedEmails: true });
          }
          resolve(null);
        }, 1000);
      }
    );
    return promise;
  }
  // checkPassword(control: FormControl) {
  //   const value = control.value;
  //   const special = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]+/.test(value);
  //   return !special ? { special: true } : null;
  // }
}
