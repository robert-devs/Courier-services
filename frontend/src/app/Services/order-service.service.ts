import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iparcel, Iuser, IUserResponse } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class OrderServiceService {
  private baseUrl = 'http://localhost:8000';
  token = localStorage.getItem('token') as string;

  parcel$!: Observable<Iparcel[]>;
  httpOptions: { headers: any; observe: string };

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'Application-json' }),
      observe: 'body',
    };
  }

  getUsers(): Observable<IUserResponse> {
    return this.http.get<IUserResponse>(`${this.baseUrl}/users`);
  }
  registerCustomer(user: [Iuser]): Observable<Iuser> {
    return this.http.post<Iuser>(`${this.baseUrl}/users`, user);
  }

  getParcels(): Observable<Iparcel[]> {
    console.log('parcels');
    return this.http.get<Iparcel[]>(`${this.baseUrl}/parcels`);
  }
  getParcelDetails(id: number): Observable<Iparcel[]> {
    return this.http.get<Iparcel[]>(`${this.baseUrl}/parcels/${id}`);
  }

  deleteParcel(id: number = 0): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${this.baseUrl}/parcels/${id}`
    );
  }
  createParcel(parcel: Iparcel): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${this.baseUrl}/parcels`,
      parcel
    );
  }
}
