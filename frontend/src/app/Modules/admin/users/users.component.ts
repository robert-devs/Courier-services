import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Iuser } from 'src/app/Interfaces/interfaces';
import { ParcelService } from 'src/app/Services/Parcel-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Iuser[] = [];
  filterText: string = '';
  constructor(private parcelService: ParcelService) {}

  ngOnInit(): void {
    // this.fetchUser;
    this.fetchUser();
  }
  deleteUser(id: string) {
    this.parcelService.deleteUser(id).subscribe({
      next: (id) => {
        this.users.slice();
        return this.fetchUser();
      },
    });
  }

  fetchUser() {
    this.parcelService.getUsers().subscribe({
      next: (data) => {
        this.users = data.users;
      },

      error: (error) => console.log(error),

      complete: () => console.log('Complete loading users'),
    });
  }
  // deleteUser(id: string['0']) {
  //   this.orderService.deleteUser(id);
  // }
}
