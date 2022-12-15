import { Component } from '@angular/core';
import { Product, products } from 'src/app/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product?: Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const { paramMap } = this.route.snapshot;
    const productId = Number(paramMap.get('productId'));
    this.product = products.find((p) => p.id === productId);
  }
}
