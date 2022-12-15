import { Routes } from '@angular/router'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { ProductListComponent } from './components/product-list/product-list.component'

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailComponent },
]
