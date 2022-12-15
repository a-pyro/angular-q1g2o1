import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'
import { CartService } from 'src/app/services/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.get()

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  })

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  get isCartEmpty() {
    return this.items.length === 0
  }

  onSubmit() {
    if (this.isCartEmpty) {
      alert('Your cart is empty')
      this.router.navigate(['/'])
      return
    }
    this.items = this.cartService.clear()
    console.warn('Your order has been submitted', this.checkoutForm.value)
    this.checkoutForm.reset()
  }
}
