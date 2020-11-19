import { Component, OnInit } from '@angular/core';
import { Merchandise } from '../models/merchandise';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  total: number = 0;
  merch: Merchandise[] = [];
  constructor() { }

  ngOnInit(): void {
    this.loadCart();
  }
  loadCart(): void {
		this.total = 0;
		this.merch = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.merch.push({
        _id: item._id,
        code: item.code,
        price: item.price,
        name: item.name,
        details: item.details,
        image: item.image,
        vendor: item.vendor  
			});
			this.total += item.price;
		}
  }
  remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item: Merchandise = JSON.parse(cart[i]);
			if (item._id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
  }
  checkOut() {
    alert('Payment features are under development.  Thank you for your patience.  The cart has been cleared.');
    localStorage.clear();
  }
}
