import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iorders, Iuser } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class OrderServiceService {
  private baseUrl = 'http://localhost:8000';

  orders$!: Observable<Iorders[]>;
  httpOptions: { headers: any; observe: string };

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'Application-json' }),
      observe: 'body',
    };
  }

  getUsers(): Observable<Iuser> {
    return this.http.get<Iuser>(`${this.baseUrl}/users`);
  }
  registerCustomer(user: [Iuser]): Observable<Iuser> {
    return this.http.post<Iuser>(`${this.baseUrl}/users`, user);
  }

  getParcels(): Observable<Iorders[]> {
    return this.http.get<Iorders[]>(`${this.baseUrl}parcels`);
  }
  getParcelDetails(id: number): Observable<Iorders[]> {
    return this.http.get<Iorders[]>(`${this.baseUrl}/parcels/${id}`);
  }

  deleteParcel(id: number = 0): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/p/${id}`);
  }
  createParcel(parcel: Iorders): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${this.baseUrl}/orders`,
      parcel
    );
  }
}
