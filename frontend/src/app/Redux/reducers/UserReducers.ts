// import { Actions } from '@ngrx/effects';
// import {
//   createFeatureSelector,
//   createReducer,
//   createSelector,
//   on,
// } from '@ngrx/store';
// import { Iregister } from 'src/app/Interfaces/interfaces';
// import * as UsersAction from '../actions/OrderActions';

// export interface orderState {
//   users: Iregister[];
//   usersError: string;
//   error: string;
//   addMessage: string;
//   DeleteMessage: string;
//   orderId: number;
//   loadingUsers: boolean;
// }
// const initialState: orderState = {
//   users: [],
//   usersError: '',
//   error: '',
//   addMessage: '',
//   DeleteMessage: '',
//   orderId: 0,
//   loadingUsers: false,
// };
// const productFeatureState = createFeatureSelector<orderState>('order');
// export const getUsers = createSelector(
//   productFeatureState,
//   (state) => state.users
// );
// export const getUserById = createSelector(
//   productFeatureState,
//   (state) => state.orderId
// );
// export const getUser = createSelector(
//   productFeatureState,
//   getUserById,
//   (state, id) => state.users.find((order) => order.id == id)
// );
// export const UserReducer = createReducer(
//   initialState,
//   on(UsersAction.LoadUsers, (state, action): userState => {
//     return { ...state, loadingUsers: true };
//   }),
//   on(UsersAction.LoadOrdersSuccess, (state, action): orderState => {
//     return { ...state, loadingUsers: false, users: action.user };
//   }),
//   on(UsersAction.LoadOrdersFailure, (state): orderState => {
//     return { ...state, loadingUsers: false };
//   }),

//   //post
//   on(UsersAction.AddOrder, (state): orderState => {
//     return { ...state, loadingUsers: true };
//   }),
//   on(UsersAction.AddOrderSuccess, (state): orderState => {
//     return { ...state, loadingUsers: false };
//   }),
//   on(UsersAction.AddOrderFailure, (state): orderState => {
//     return { ...state, loadingUsers: false };
//   }),

//   //delete order

//   on(UsersAction.DeleteOrder, (state): orderState => {
//     return { ...state, loadingUsers: true };
//   }),
//   on(UsersAction.DeleteOrderSuccess, (state): orderState => {
//     return { ...state, loadingUsers: false };
//   }),
//   on(UsersAction.DeleteUserFailure, (state): orderState => {
//     return { ...state, loadingUsers: false };
//   })
// );
