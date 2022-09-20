import { Actions } from '@ngrx/effects';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Iparcel } from 'src/app/Interfaces/interfaces';
import * as ParcelAction from '../actions/OrderActions';
export interface parcelState {
  parcels: Iparcel[];
  parcelError: string;
  error: string;
  addMessage: string;
  DeleteMessage: string;
  parcelId: number;
  loadingParcels: boolean;
}
const initialState: parcelState = {
  parcels: [],
  parcelError: '',
  error: '',
  addMessage: '',
  DeleteMessage: '',
  parcelId: 0,
  loadingParcels: false,
};
const productFeatureState = createFeatureSelector<parcelState>('order');
export const getOrders = createSelector(
  productFeatureState,
  (state) => state.parcels
);
export const getParcelById = createSelector(
  productFeatureState,
  (state) => state.parcelId
);
export const getParcel = createSelector(
  productFeatureState,
  getParcelById,
  (state, id) => state.parcels.find((parcel) => parcel.id == id)
);
export const OrderReducer = createReducer(
  initialState,
  on(ParcelAction.loadParcels, (state, action): parcelState => {
    return { ...state, loadingParcels: true };
  }),
  on(ParcelAction.LoadParcelsSuccess, (state, action): parcelState => {
    return { ...state, loadingParcels: false, parcels: action.parcels };
  }),
  on(ParcelAction.LoadParcelsFailure, (state): parcelState => {
    return { ...state, loadingParcels: false };
  }),

  //post
  on(ParcelAction.AddParcel, (state): parcelState => {
    return { ...state, loadingParcels: true };
  }),
  on(ParcelAction.AddParcelSuccess, (state): parcelState => {
    return { ...state, loadingParcels: false };
  }),
  on(ParcelAction.AddParcelFailure, (state): parcelState => {
    return { ...state, loadingParcels: false };
  }),

  //delete order

  on(ParcelAction.DeleteParcel, (state): parcelState => {
    return { ...state, loadingParcels: true };
  }),
  on(ParcelAction.DeleteParcelSuccess, (state): parcelState => {
    return { ...state, loadingParcels: false };
  }),
  on(ParcelAction.DeleteParcelFailure, (state): parcelState => {
    return { ...state, loadingParcels: false };
  })
);
