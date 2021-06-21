import { CheckoutComponent } from './shop/checkout/checkout.component';
import { CartDetailComponent } from './shop/cart-detail/cart-detail.component';
import { ShopModule } from './shop/shop.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    FormsModule,
    RouterModule.forRoot([
       { path: 'shop', component: ShopComponent },
       { path: 'cart', component: CartDetailComponent },
       { path: 'checkout', component: CheckoutComponent },
       { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m=>m.AdminModule) },
       { path: '**', redirectTo: "/shop" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
