import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  loadPorductsByCategory(categoryId: number = 2) {
    return this.http.get<Product[]>(
      `https://api.escuelajs.co/api/v1/products?offset=0&limit=10&categoryId=${categoryId}`
    );
  }
}
