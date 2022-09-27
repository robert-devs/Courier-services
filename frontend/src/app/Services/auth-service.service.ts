import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of, throwError } from 'rxjs';
import { Iregister, Iuser, userInfo } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  // isLogedIn: boolean = false;
  private baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient, private router: Router) {}

  loginUser(user: { email: string; password: string }) {
    return this.http.post(`${this.baseUrl}/users/login`, user).pipe(
      map((res: any) => {
        console.log({ res });

        alert('login successful');
        return res.user;
      }),
      catchError((error: any) => {
        alert('login successful');

        return throwError(() => new Error(error.error.message));
      })
    );
  }
  registerUser(user: Iregister) {
    return this.http
      .post<Iregister[]>(`${this.baseUrl}/users/register`, user)
      .pipe(
        map((res: any) => {
          return res.user;
        }),
        catchError((error: any) => {
          return throwError(() => new Error(error.error.message));
        })
      );
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
