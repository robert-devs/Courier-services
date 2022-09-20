import { createAction, props } from '@ngrx/store';
import { Iregister } from 'src/app/Interfaces/interfaces';

export const SelectedId = createAction('SelectedId', props<{ id: number }>());

export const loadUsers = createAction('LoadOrders');
export const LoadUsersSuccess = createAction(
  'LoadUserSuccess',
  props<{ users: Iregister[] }>()
);
export const LoadOrdUsersFailure = createAction(
  'LoadUsersFailure',
  props<{ error: string }>()
);

export const DeleteUser = createAction('DeleteUser', props<{ id: number }>());
export const DeleteUserSuccess = createAction(
  'DeleteUserSuccess',
  props<{ deletemessage: string }>()
);
export const DeleteUserFailure = createAction(
  'DeleteUserFailure',
  props<{ error: string }>()
);

export const AddUser = createAction(
  'AddOrder',
  props<{ newUser: Iregister }>()
);
export const AddUsererSuccess = createAction(
  'AddUserSuccess',
  props<{ addMessage: string }>()
);
export const AddUserFailure = createAction(
  'AddOrderFailure',
  props<{ error: string }>()
);
