import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();

  get isExpensive(): boolean {
    return this.product.price >= 700;
  }

  get showAlertBtn(): boolean {
    return this.product && this.isExpensive;
  }
}
