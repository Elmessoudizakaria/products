import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ProductDescriptionHolderComponent,
  ProductImgHolderComponent,
} from '@components/product-list';
import { ProductService, SharedModule } from '../../shared';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    ProductDescriptionHolderComponent,
    ProductImgHolderComponent,
  ],
  providers: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products$ = this.productService.loadPorductsByCategory();

  constructor(private productService: ProductService) {}
}
