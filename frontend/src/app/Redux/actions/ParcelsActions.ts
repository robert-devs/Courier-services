import { createAction, props } from '@ngrx/store';
import { Iparcel } from 'src/app/Interfaces/interfaces';
import { DeleteUser } from './user.Action';

export const SelectedId = createAction('SelectedId', props<{ id: string }>());

export const loadParcels = createAction('loadParcels');
export const LoadParcelsSuccess = createAction(
  'LoadParcelsSuccess',
  props<{ parcels: Iparcel[] }>()
);
export const LoadParcelsFailure = createAction(
  'LoadParcelsFailure',
  props<{ error: string }>()
);

export const DeleteParcel = createAction(
  'DeleteParcel',
  props<{ id: string }>()
);
export const DeleteParcelSuccess = createAction(
  'DeleteParcelSuccess',
  props<{ deletemessage: string }>()
);
export const DeleteParcelFailure = createAction(
  'DeleteParcelFailure',
  props<{ error: string }>()
);
//updateParcel
export const updateParcel = createAction('update', props<{ id: string }>());
export const updateParcelSuccess = createAction(
  'updateParcelSuccess',
  props<{ updatemessage: string }>()
);
export const updateParcelFailure = createAction(
  'updateParcelFailure',
  props<{ error: string }>()
);

//addParcel
export const AddParcel = createAction(
  'AddParcel',
  props<{ newParcel: Iparcel }>()
);
export const AddParcelSuccess = createAction(
  'AddParcelSuccess',
  props<{ addMessage: string }>()
);
export const AddParcelFailure = createAction(
  'AddParcelFailure',
  props<{ error: string }>()
);
//

export const loadUserParcels = createAction(
  '[Parcel] Load User Parcels',
  props<{ userId: string }>()
);
export const loadUserParcelsSuccess = createAction(
  '[Parcel] Load User Parcels Success',
  props<{ parcels: Iparcel[] }>()
);
export const loadUserParcelsFailure = createAction(
  '[Parcel] Load User Parcels Failure',
  props<{ error: string }>()
);

////user actions
// export const SelectedId = createAction('SelectedId', props<{ id: number }>());

// export const loadUsers = createAction('LoadOrders');
// export const LoadUsersSuccess = createAction(
//   'LoadUserSuccess',
//   props<{ users: Iregister[] }>()
// );
// export const LoadOrdUsersFailure = createAction(
//   'LoadUsersFailure',
//   props<{ error: string }>()
// );

// export const DeleteUser = createAction('DeleteUser', props<{ id: number }>());
// export const DeleteUserSuccess = createAction(
//   'DeleteUserSuccess',
//   props<{ deletemessage: string }>()
// );
// export const DeleteUserFailure = createAction(
//   'DeleteUserFailure',
//   props<{ error: string }>()
// );

// export const AddUser = createAction(
//   'AddOrder',
//   props<{ newUser: Iregister }>()
// );
// export const AddUsererSuccess = createAction(
//   'AddUserSuccess',
//   props<{ addMessage: string }>()
// );
// export const AddUserFailure = createAction(
//   'AddOrderFailure',
//   props<{ error: string }>()
// );
