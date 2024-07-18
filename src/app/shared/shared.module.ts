import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductService } from './product.service';
import { AsyncPipe } from '@angular/common';
import { ProductFilterPipe } from './product-filter.pipe';

@NgModule({
  imports: [AsyncPipe],
  exports: [AsyncPipe, ProductFilterPipe],
  declarations: [ProductFilterPipe],
  providers: [provideHttpClient(), ProductService],
})
export class SharedModule {}
