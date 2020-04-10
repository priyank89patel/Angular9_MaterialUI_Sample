import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { ProductDetail } from '../../models/product-detail';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }
  productDetails: ProductDetail[];

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProducts()
      .subscribe(
        (products) => { this.productDetails = products; },
        (error) => { console.log(error) },
        () => { }
      )
  }
}
