import { CartComponent } from './components/cart/cart.component'
import { Routes } from '@angular/router'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import { ShippingComponent } from './components/shipping/shipping.component'

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
]
