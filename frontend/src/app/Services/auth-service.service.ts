import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, of, throwError } from 'rxjs';
import { Iregister, Iuser, userInfo } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  // isLogedIn: boolean = false;
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  loginUser(details: userInfo) {
    return this.http
      .get<Iuser[]>(
        `${this.baseUrl}/users?email=${details.email}&password=${details.password}`
      )
      .pipe(
        map((res: Iuser[]) => {
          if (res.length <= 0) {
            throw Error('Invalid Credentials');
          }
          return res[0];
        })
      );
  }
  registerUser(details: Iregister) {
    return this.http.post<Iregister[]>;
  }

  isLogedIn() {
    return !!localStorage.getItem('user');
    // return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/Login']);
  }
}
