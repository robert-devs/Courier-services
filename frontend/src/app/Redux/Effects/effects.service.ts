import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concat, concatMap, map, mergeMap, of, tap } from 'rxjs';
import { ParcelService } from 'src/app/Services/Parcel-service.service';
import * as OrderActions from '../actions/ParcelsActions';

@Injectable({
  providedIn: 'root',
})
export class EffectsService {
  constructor(
    private actions: Actions,
    private orderService: ParcelService,
    private store: Store,
    private router: Router
  ) {}
  loadParcels = createEffect(() => {
    return this.actions.pipe(
      ofType(OrderActions.loadParcels),
      concatMap(() =>
        this.orderService.getParcels().pipe(
          map((res) => OrderActions.LoadParcelsSuccess({ parcels: res })),
          catchError((error) =>
            of(OrderActions.LoadParcelsFailure({ error: error }))
          )
        )
      )
    );
  });

  loadUserParcels = createEffect(() => {
    return this.actions.pipe(
      ofType(OrderActions.loadUserParcels),
      concatMap(({ userId }) =>
        this.orderService.getParcelByUserId(userId).pipe(
          map((res) => OrderActions.loadUserParcelsSuccess({ parcels: res })),
          catchError((error) =>
            of(OrderActions.loadUserParcelsFailure({ error: error }))
          )
        )
      )
    );
  });

  addParcel = createEffect(() => {
    return this.actions.pipe(
      ofType(OrderActions.AddParcel),
      mergeMap((action) =>
        this.orderService.createParcel(action.newParcel).pipe(
          tap((res) => {
            this.store.dispatch(OrderActions.loadParcels());
            this.router.navigate(['/admin/view-order']);
          }),
          map((res) =>
            OrderActions.AddParcelSuccess({ addMessage: res.message })
          ),
          catchError((error) =>
            of(OrderActions.AddParcelFailure({ error: error }))
          )
        )
      )
    );
  });
  deleteOrder = createEffect(() => {
    return this.actions.pipe(
      ofType(OrderActions.DeleteParcel),
      mergeMap((action) =>
        this.orderService.deleteParcel(action.id).pipe(
          tap((res) => {
            this.store.dispatch(OrderActions.loadParcels());
          }),
          map((res) =>
            OrderActions.DeleteParcelSuccess({ deletemessage: res.message })
          )
        )
      ),
      catchError((error) =>
        of(OrderActions.DeleteParcelFailure({ error: error.message }))
      )
    );
  });
}
