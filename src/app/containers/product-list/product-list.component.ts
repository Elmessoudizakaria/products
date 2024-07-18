import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ProductDescriptionHolderComponent,
  ProductImgHolderComponent,
} from '@components/product-list';
import { Product, ProductService, SharedModule } from '@shared/index';

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
export class ProductListComponent implements OnInit {
  products$ = this.productService.loadPorductsByCategory();
  selectedProducts: Product[] = [];
  selectedProductChannel = new BroadcastChannel('selected-product-channel');
  selectedCategorieChannel = new BroadcastChannel('selected-categorie');

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.selectedCategorieChannel.addEventListener('message', (evt) => {
      console.log('CAT ', evt.data);
      this.loadPorducts(evt.data);
    });
  }

  loadPorducts(categoryId: number) {
    this.products$ = this.productService.loadPorductsByCategory(categoryId);
  }

  selectProduct(product: Product) {
    this.selectedProducts = [...this.selectedProducts, product];
    this.selectedProductChannel.postMessage(this.selectedProducts);
  }
  unselectProduct(productId: number) {
    this.selectedProducts = this.selectedProducts.filter(
      (prod) => prod.id !== productId
    );
    this.selectedProductChannel.postMessage(this.selectedProducts);
  }
  isSelected(productId: number) {
    return (
      this.selectedProducts.find((prod) => prod.id === productId) != undefined
    );
  }
}
