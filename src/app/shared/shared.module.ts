import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductService } from './product.service';
import { AsyncPipe } from '@angular/common';

@NgModule({
  imports: [AsyncPipe],
  exports: [AsyncPipe],
  declarations: [],
  providers: [provideHttpClient(), ProductService],
})
export class SharedModule {}
