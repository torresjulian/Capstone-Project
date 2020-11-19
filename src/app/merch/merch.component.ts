import { Component, OnInit } from '@angular/core';
import { Merchandise } from '../models/merchandise';
import { MerchandiseService } from '../services/merchandise.service';
//import { Vendor } from '../models/vendor';
import { VendorService } from '../services/vendor.service';
import { MerchandiseEditComponent } from '../merchandise-edit/merchandise-edit.component';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css']
})
export class MerchComponent implements OnInit {
  merchandise: Merchandise[];
  //vendors: Vendor[];
  constructor(private merchService: MerchandiseService, private vendorService: VendorService) { }
  ngOnInit(): void {
    this.getMerch();
    //this.getVendors();
  }
  getMerch() {
    return this.merchService.getMerch()
      .subscribe(
        merch => {
          console.log(merch);
          this.merchandise = merch
        }
      );
  }
  // getVendors() {
  //   return this.vendorService.getVendors().subscribe(vendors => this.vendors = vendors)
  // }
  addToCart(merch, id){
    //console.log(merch);
    // localStorage.setItem('merch', JSON.stringify(merch));

    // var locals = localStorage.getItem('merch');
    // console.log(JSON.parse(locals));
    if (localStorage.getItem('cart') == null) {
      let cart: any = [];
      cart.push(JSON.stringify(merch));
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      let cart: any = JSON.parse(localStorage.getItem('cart'));
      let index: number = -1;
      // for (var i = 0; i < cart.length; i++) {
      //   let item: Merchandise = JSON.parse(cart[i]);
      //   if (item._id == id) {
      //     index = i;
      //     break;
      //   }
      // }
      if (index == -1) {
        cart.push(JSON.stringify(merch));
        localStorage.setItem('cart', JSON.stringify(cart));
      // } else {
      //   let item: Merchandise = JSON.parse(cart[index]);
      //   item.quantity += 1;
      //   cart[index] = JSON.stringify(item);
      //   localStorage.setItem("cart", JSON.stringify(cart));
      // }
      }
    }
    var locals = localStorage.getItem('cart');
    console.log(JSON.parse(locals));
  }
}
