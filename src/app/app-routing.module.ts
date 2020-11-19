import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { MerchandiseListComponent } from './merchandise-list/merchandise-list.component';
import { MerchandiseAddComponent } from './merchandise-add/merchandise-add.component';
import { MerchandiseDetailComponent } from './merchandise-detail/merchandise-detail.component';
import { MerchandiseEditComponent } from './merchandise-edit/merchandise-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vendor-add', component: VendorAddComponent, canActivate: [AuthGuard] },
  { path: 'vendor-list', component: VendorListComponent, canActivate: [AuthGuard] },
  { path: 'vendor-detail/:id', component: VendorDetailComponent, canActivate: [AuthGuard] },
  { path: 'vendor-edit/:id', component: VendorEditComponent, canActivate: [AuthGuard] },
  { path: 'merchandise-list', component: MerchandiseListComponent, canActivate: [AuthGuard] },
  { path: 'merchandise-add', component: MerchandiseAddComponent, canActivate: [AuthGuard] },
  { path: 'merchandise-detail/:id', component: MerchandiseDetailComponent, canActivate: [AuthGuard] },
  { path: 'merchandise-edit/:id', component: MerchandiseEditComponent, canActivate: [AuthGuard] },
  { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard] } ,
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }