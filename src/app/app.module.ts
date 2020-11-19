import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { MerchandiseAddComponent } from './merchandise-add/merchandise-add.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { MerchandiseListComponent } from './merchandise-list/merchandise-list.component';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { MerchandiseEditComponent } from './merchandise-edit/merchandise-edit.component';
import { MerchandiseDetailComponent } from './merchandise-detail/merchandise-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { MerchComponent } from './merch/merch.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MerchandiseAddComponent,
    VendorAddComponent,
    VendorListComponent,
    MerchandiseListComponent,
    VendorDetailComponent,
    VendorEditComponent,
    MerchandiseEditComponent,
    MerchandiseDetailComponent,
    UserListComponent,
    MerchComponent,
    CartComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never'}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
