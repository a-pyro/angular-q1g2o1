import { Product } from 'src/app/products'
import { Component } from '@angular/core'
import { CartService } from 'src/app/services/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.get()

  constructor(private cartService: CartService) {}
}
