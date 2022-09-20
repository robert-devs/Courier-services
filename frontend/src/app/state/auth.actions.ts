import { createAction, props } from '@ngrx/store';
import { Iuser } from '../Interfaces/interfaces';

export const loginUser = createAction(
  '[Auth] Login User',
  props<{ details: { email: string; password: string } }>()
);

export const loginUserSuccess = createAction(
  '[Auth] Login User Success',
  props<{ user: Iuser }>()
);

export const loginUserFailure = createAction(
  '[Auth] Login User Failure',
  props<{ error: string }>()
);

///register a user
export const registerUser = createAction(
  ' [Auth]Register user',
  props<{
    details: {
      name: string;
      email: string;
      password: string;
      phone: string;
      address: string;
    };
  }>()
);
export const registerUserSuccess = createAction(
  '[Auth] regsterUserSuccess',
  props<{ user: Iuser }>()
);
export const registerUserFailure = createAction(
  '[Auth] register User Success',
  props<{ error: string }>()
);
