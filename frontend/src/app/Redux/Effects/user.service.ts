// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { catchError, concatMap, map, mergeMap, of } from 'rxjs';
// import { OrderServiceService } from 'src/app/Services/order-service.service';
// import * as UsersAction from '../actions/OrderActions';

// @Injectable({
//   providedIn: 'root',
// })
// export class EffectsService {
//   constructor(
//     private actions: Actions,
//     private orderService: OrderServiceService
//   ) {}
//   loadOrder = createEffect(() => {
//     return this.actions.pipe(
//       ofType(UsersAction.LoadUsers),
//       concatMap(() =>
//         this.orderService.getUsers().pipe(
//           map((res) => UsersAction.LoadUsersSuccess({ orders: res })),
//           catchError((error) =>
//             of(UsersAction.LoadOrdersFailure({ error: error }))
//           )
//         )
//       )
//     );
//   });
//   addOrder = createEffect(() => {
//     return this.actions.pipe(
//       ofType(UsersAction.AddOrder),
//       mergeMap((action) =>
//         this.orderService.createUser(action.newOrder).pipe(
//           map((res) =>
//             UsersAction.AddOrderSuccess({ addMessage: res.message })
//           ),
//           catchError((error) =>
//             of(UsersAction.AddOrderFailure({ error: error }))
//           )
//         )
//       )
//     );
//   });
//   deleteOrder = createEffect(() => {
//     return this.actions.pipe(
//       ofType(UsersAction.Deleteer),
//       mergeMap((action) =>
//         this.orderService
//           .deleteOrder(action.id)
//           .pipe(
//             map((res) =>
//               UsersAction.DeleteOrderSuccess({ deletemessage: res.message })
//             )
//           )
//       ),
//       catchError((error) =>
//         of(UsersAction.DeleteOrderFailure({ error: error.message }))
//       )
//     );
//   });
// }
