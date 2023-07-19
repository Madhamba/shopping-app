import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/products`).pipe(
      map(res => {
        return res;
      }),
    );
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.baseUrl}/products/${id}`).pipe(
      map(res => {
        return res;
      }),
    );
  }

}
