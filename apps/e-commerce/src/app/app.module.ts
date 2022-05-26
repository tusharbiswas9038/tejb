import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersModule } from '@tejb/orders';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuardService, UsersModule } from '@tejb/users';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { NgxStripeModule } from 'ngx-stripe';
import { NgToastModule } from 'ng-angular-popup'

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    
  },
  {
    path: 'accessories',
    component: ProductListComponent,
  },
  {
    path: 'product/:productid',
    component: ProductsComponent,
  },
  {
    path: 'cart',
    component: CartPageComponent,
  },
  {
    path: 'checkout',
    canActivate: [AuthGuardService],
    component: CheckoutPageComponent,
  },
  {
    path: 'thankyou',
    component: ThankyouComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductListComponent,
    CartPageComponent,
    CheckoutComponent,
    CheckoutPageComponent,
    ThankyouComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    OrdersModule,
    UsersModule,
    NgToastModule,
    NgxStripeModule.forRoot('pk_test_51KzHLhSF0RHvnjsw3FjpDEHDT8w2h4i0wE0YIcwMQysUu6xcC5U2cnysGkKvkd3nIF74slu06nGUbZ2uggrsM8a500oxfdHP44')
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CartPageComponent,
    CheckoutComponent,
    CheckoutPageComponent,
    ThankyouComponent
  ],
})
export class AppModule {}
