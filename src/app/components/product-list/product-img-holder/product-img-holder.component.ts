import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-img-holder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-img-holder.component.html',
  styleUrl: './product-img-holder.component.scss',
})
export class ProductImgHolderComponent {
  @Input() imge: string = '';
}
