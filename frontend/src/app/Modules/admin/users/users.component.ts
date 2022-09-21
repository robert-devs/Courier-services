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
  constructor(private orderService: ParcelService) {}

  ngOnInit(): void {
    // this.fetchUser;
    this.fetchUser();
  }
  // deleteUser(id: string) {
  //   this.orderService.deleteUser(id).subscribe({
  //     next:
  //   });
  // }

  fetchUser() {
    this.orderService.getUsers().subscribe({
      next: (data) => {
        this.users = data.users;
      },

      error: (error) => console.log(error),

      complete: () => console.log('Complete loading users'),
    });
  }
}
