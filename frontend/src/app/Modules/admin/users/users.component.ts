import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Iuser } from 'src/app/Interfaces/interfaces';
import { OrderServiceService } from 'src/app/Services/order-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Iuser[] = [];
  constructor(
    private orderService: OrderServiceService,
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute // private
  ) {}

  ngOnInit(): void {}
  deleteUser(id: string) {
    // this.store.dispatch(DeleteOrder({ id }));
    // this.store.dispatch(LoadOrders());
  }
}
