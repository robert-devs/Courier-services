import { Actions } from '@ngrx/effects';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Iorders } from 'src/app/Interfaces/interfaces';
import * as OrdersAction from '../actions/OrderActions';
export interface orderState {
  orders: Iorders[];
  ordersError: string;
  error: string;
  addMessage: string;
  DeleteMessage: string;
  orderId: number;
  loadingOrders: boolean;
}
const initialState: orderState = {
  orders: [],
  ordersError: '',
  error: '',
  addMessage: '',
  DeleteMessage: '',
  orderId: 0,
  loadingOrders: false,
};
const productFeatureState = createFeatureSelector<orderState>('order');
export const getOrders = createSelector(
  productFeatureState,
  (state) => state.orders
);
export const getOderById = createSelector(
  productFeatureState,
  (state) => state.orderId
);
export const getOrder = createSelector(
  productFeatureState,
  getOderById,
  (state, id) => state.orders.find((order) => order.id == id)
);
export const OrderReducer = createReducer(
  initialState,
  on(OrdersAction.LoadOrders, (state, action): orderState => {
    return { ...state, loadingOrders: true };
  }),
  on(OrdersAction.LoadOrdersSuccess, (state, action): orderState => {
    return { ...state, loadingOrders: false, orders: action.orders };
  }),
  on(OrdersAction.LoadOrdersFailure, (state): orderState => {
    return { ...state, loadingOrders: false };
  }),

  //post
  on(OrdersAction.AddOrder, (state): orderState => {
    return { ...state, loadingOrders: true };
  }),
  on(OrdersAction.AddOrderSuccess, (state): orderState => {
    return { ...state, loadingOrders: false };
  }),
  on(OrdersAction.AddOrderFailure, (state): orderState => {
    return { ...state, loadingOrders: false };
  }),

  //delete order

  on(OrdersAction.DeleteOrder, (state): orderState => {
    return { ...state, loadingOrders: true };
  }),
  on(OrdersAction.DeleteOrderSuccess, (state): orderState => {
    return { ...state, loadingOrders: false };
  }),
  on(OrdersAction.DeleteOrderFailure, (state): orderState => {
    return { ...state, loadingOrders: false };
  })
);
