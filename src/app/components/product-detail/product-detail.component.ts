import { CartService } from './../../services/cart.service'
import { Component } from '@angular/core'
import { Product, products } from 'src/app/products'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product?: Product

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const { paramMap } = this.route.snapshot
    const productId = Number(paramMap.get('productId'))
    this.product = products.find((p) => p.id === productId)
  }

  addToCart(product: Product) {
    this.cartService.add(product)
    window.alert('Your product has been added to the cart!')
  }
}
