import { Product } from 'src/app/products'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = []

  constructor(private http: HttpClient) {}

  add(product: Product) {
    this.items.push(product)
  }

  get() {
    return this.items
  }

  clear() {
    this.items = []
    return this.items
  }

  getShippingPrices() {
    return this.http.get<{ icon: string; type: string; price: number }[]>(
      '/assets/shipping.json'
    )
  }
}
