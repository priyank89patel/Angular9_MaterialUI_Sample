import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetail } from './models/product-detail';
import { productList } from './mock-product-list';
import { from } from 'rxjs';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Observable<ProductDetail[]> {
    return from([productList]);
  }
}
