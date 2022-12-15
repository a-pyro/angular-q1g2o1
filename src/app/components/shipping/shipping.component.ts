import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { CartService } from 'src/app/services/cart.service'

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  shippingCosts!: Observable<{ icon: string; type: string; price: number }[]>

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices()
  }
}
