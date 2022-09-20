import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Iuser } from '../Interfaces/interfaces';
import { AuthServiceService } from '../Services/auth-service.service';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthServiceService,
    private router: Router
  ) {}

  logginUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(AuthActions.loginUser),
      mergeMap((action) =>
        this.authService.loginUser(action.details).pipe(
          tap((res) => {
            localStorage.setItem('user', JSON.stringify(res));
            if (res.role === 'Admin') {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/user']);
            }
          }),
          map((user) => AuthActions.loginUserSuccess({ user })),
          catchError((error) =>
            of(AuthActions.loginUserFailure({ error: error.message }))
          )
        )
      )
    );
  });

  ///register
  registerUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(AuthActions.registerUser),
      mergeMap((action) =>
        this.authService.registerUser(action.details).pipe(
          tap((res) => {
            localStorage.setItem('user', JSON.stringify(res));
            if (res.role === 'admin') {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/user']);
            }
          }),
          map((user) => AuthActions.registerUserSuccess({ user })),
          catchError((error) =>
            of(AuthActions.registerUserFailure({ error: error.message }))
          )
        )
      )
    );
  });
}
