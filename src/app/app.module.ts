import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { routes } from './routes'
import { AppComponent } from './app.component'
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import { ProductComponent } from './components/product/product.component'
import { TopBarComponent } from './components/top-bar/top-bar.component'

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductComponent,
    ProductAlertsComponent,
    ProductDetailComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
