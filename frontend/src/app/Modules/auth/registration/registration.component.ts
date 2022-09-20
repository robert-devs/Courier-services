import { Component, OnInit } from '@angular/core';
import {
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
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

  constructor(private fb: FormBuilder, private store: Store) {}

  allowedEmails = ['@'];

  // pattern = [Validators.pattern('^[A-Za-z0-9._%+-]+@thejitu.com$')];
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email],
        this.checkEmails.bind(this) as AsyncValidatorFn,
      ],
      password: ['', [Validators.required, Validators.min(8)]],
      phone: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid)
      this.store.dispatch(
        AuthActions.registerUser({ details: this.form.value })
      );
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
}
