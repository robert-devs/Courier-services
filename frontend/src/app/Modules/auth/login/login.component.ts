import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { getAuthError } from 'src/app/state';
import * as AuthActions from 'src/app/state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginDetails = {
    email: '',
    password: '',
  };
  errorMessage$: Observable<string> = new Observable();

  constructor(
    private store: Store,
    private authServise: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.errorMessage$ = this.store.select(getAuthError);
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.store.dispatch(
        AuthActions.loginUser({ details: this.loginDetails })
      );
      if (this.authServise.redirectUrl) {
        this.router.navigateByUrl(this.authServise.redirectUrl);
      } else {
        this.router.navigate(['/user']);
      }
    }

    // const users = this.form.values
    // if(users.email.role ===email || users.password === password){
    //   return users
    // }
    // else{}
  }
}
