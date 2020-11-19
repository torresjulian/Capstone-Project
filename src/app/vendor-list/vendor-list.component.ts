import { Component, OnInit } from '@angular/core';
import { Vendor } from '../models/vendor';
import { VendorService } from '../services/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors: Vendor[];
  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    this.getVendors();
  }
  getVendors() {
    return this.vendorService.getVendors().subscribe( vendors => { console.log(vendors); this.vendors = vendors});
  }
}