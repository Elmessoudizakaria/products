import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '@shared/product.interface';

@Component({
  selector: 'app-product-description-holder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-description-holder.component.html',
  styleUrl: './product-description-holder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDescriptionHolderComponent {
  @Input() product: Product | undefined;
}
