import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
// import { Actions } from '@ngrx/effects';
import { Iparcel } from 'src/app/Interfaces/interfaces';
import { OrderServiceService } from 'src/app/Services/order-service.service';
import { getOrders } from 'src/app/Redux/reducers/OrderReducers';
import * as OrderActions from '../../../Redux/actions/OrderActions';
import { AnyFn } from '@ngrx/store/src/selector';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.scss'],
})
export class ViewOrdersComponent implements OnInit {
  parcels$ = this.store.select(getOrders);
  parcels: Iparcel[] = [];
  newParcel: Iparcel[] = [];
  filterText: string = '';
  filteredOrders: Iparcel[] = [];
  private _listFiter: string = '';
  checked: any;

  constructor(
    private pacelService: OrderServiceService,
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute // private
  ) {}

  get listFilter(): string {
    return this._listFiter;
  }

  set listFilter(value: string) {
    this._listFiter = value;
    this.filteredOrders = this.performFilter(value);
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.parcels.filter((parcel) =>
      parcel.pname.toLocaleLowerCase().includes(filterBy)
    );
  }

  ngOnInit(): void {
    this.loadParcels();
    this.filteredOrders = this.parcels;
  }
  loadUser() {
    this.pacelService.getUsers().subscribe((result) => {
      console.log(result);
    });
  }
  loadParcels() {
    console.log(this.parcels);

    this.store.dispatch(OrderActions.loadParcels());
  }
  createParcel(newParcel: Iparcel) {
    return this.store.dispatch(OrderActions.AddParcel({ newParcel }));
  }
  // deleteParcel(id: string) {
  //   this.pacelService.getParcels().subscribe({
  //     next: (data) => {
  //       this.parcels = data;
  //     },

  //     error: (error) => console.log(error),

  //     complete: () => console.log('Complete loading users'),
  //   });
  // }

  deleteParcel(id: string) {
    this.store.dispatch(OrderActions.DeleteParcel({ id }));
  }

  status(id: any) {
    if (this.checked === OrderActions.SelectedId) {
      this.store.dispatch(OrderActions.SelectedId({ id }));
      console.log(id);
    }
    // this.store.dispatch(OrderActions.SelectedId({ id }));

    this.router.navigate([`/admin/status/delivered`]);
  }
  orderDelivered(id: number = 0) {}
}
