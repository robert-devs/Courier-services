import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Router } from 'express';
import { map, Observable, observable } from 'rxjs';
import { Iparcel } from 'src/app/Interfaces/interfaces';
import { getParcels, parcelState } from 'src/app/Redux/reducers/ParcelReducers';
import { getAuthUserId } from 'src/app/state';
import * as ParcelAction from '../../../Redux/actions/ParcelsActions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  faTruck = faTruck;
  id!: string;
  parcels = this.store.select(getParcels);

  constructor(
    private store: Store<parcelState>,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.select(getAuthUserId).subscribe((res) => {
      if (res)
        this.store.dispatch(ParcelAction.loadUserParcels({ userId: res }));
    });
  }
}
