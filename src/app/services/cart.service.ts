import { Product } from 'src/app/products'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = []
  constructor() {}
}
