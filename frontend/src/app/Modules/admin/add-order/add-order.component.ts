import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iorders } from 'src/app/Interfaces/interfaces';
import { OrderServiceService } from 'src/app/Services/order-service.service';

import { Router } from '@angular/router';
import { getOrders } from 'src/app/Redux/reducers/OrderReducers';
import * as OrderActions from '../../../Redux/actions/OrderActions';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent implements OnInit {
  addForm!: FormGroup;
  submitted = false;
  // orders$ = this.store.select(OrderActions.AddOrder)
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addForm = this.fb.group({
      Uname: ['', [Validators.required]],
      Pname: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      address: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      datetime: ['', [Validators.required]],
    });
  }

  get addFormControl() {
    return this.addForm.controls;
  }

  add() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.store.dispatch(
        OrderActions.AddOrder({ newOrder: this.addForm.value })
      );
    }

    // this.store.dispatch(OrderActions.LoadOrders());
    // this.router.navigate(['/admin/view-order']);
  }
}
