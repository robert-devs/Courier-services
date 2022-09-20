import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concat, concatMap, map, mergeMap, of, tap } from 'rxjs';
import { OrderServiceService } from 'src/app/Services/order-service.service';
import * as OrderActions from '../actions/OrderActions';

@Injectable({
  providedIn: 'root',
})
export class EffectsService {
  constructor(
    private actions: Actions,
    private orderService: OrderServiceService,
    private store: Store,
    private router: Router
  ) {}
  loadOrder = createEffect(() => {
    return this.actions.pipe(
      ofType(OrderActions.LoadOrders),
      concatMap(() =>
        this.orderService.getOrders().pipe(
          map((res) => OrderActions.LoadOrdersSuccess({ orders: res })),
          catchError((error) =>
            of(OrderActions.LoadOrdersFailure({ error: error }))
          )
        )
      )
    );
  });
  addOrder = createEffect(() => {
    return this.actions.pipe(
      ofType(OrderActions.AddOrder),
      mergeMap((action) =>
        this.orderService.createOrder(action.newOrder).pipe(
          tap((res) => {
            this.store.dispatch(OrderActions.LoadOrders());
            this.router.navigate(['/admin/view-order']);
          }),
          map((res) =>
            OrderActions.AddOrderSuccess({ addMessage: res.message })
          ),
          catchError((error) =>
            of(OrderActions.AddOrderFailure({ error: error }))
          )
        )
      )
    );
  });
  deleteOrder = createEffect(() => {
    return this.actions.pipe(
      ofType(OrderActions.DeleteOrder),
      mergeMap((action) =>
        this.orderService.deleteOrder(action.id).pipe(
          tap((res) => {
            // this.store.dispatch(OrderActions.SelectedId({ id: 0 }));
            this.router.navigate(['/admin/view-order']);
          }),
          map((res) =>
            OrderActions.DeleteOrderSuccess({ deletemessage: res.message })
          )
        )
      ),
      catchError((error) =>
        of(OrderActions.DeleteOrderFailure({ error: error.message }))
      )
    );
  });
}
