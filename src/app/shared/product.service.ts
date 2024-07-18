import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  loadPorductsByCategory(categoryId: string = 'smartphones') {
    return this.http.get<{ products: Product[] }>(
      `https://dummyjson.com/products/category/${categoryId}`
    );
  }
}
