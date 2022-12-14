import { Component, Input } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product?: Product;

  get name(): string {
    return this.product?.name ?? '';
  }

  get linkTitle(): string {
    return `${this.name} details`;
  }

  fire(name: string) {
    alert(name);
  }
}
