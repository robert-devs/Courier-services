import { createAction, props } from '@ngrx/store';
import { Iparcel } from 'src/app/Interfaces/interfaces';

export const SelectedId = createAction('SelectedId', props<{ id: number }>());

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
  'DeleteOrder',
  props<{ id: number }>()
);
export const DeleteParcelSuccess = createAction(
  'DeleteParcelSuccess',
  props<{ deletemessage: string }>()
);
export const DeleteParcelFailure = createAction(
  'DeleteParcelFailure',
  props<{ error: string }>()
);

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
// export function LoadUsers(
//   LoadUsers: any
// ): import('rxjs').OperatorFunction<import('@ngrx/store').Action, any> {
//   throw new Error('Function not implemented.');
// }
