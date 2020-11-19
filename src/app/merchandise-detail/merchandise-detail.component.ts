import { Component, OnInit } from '@angular/core';
import { Merchandise } from '../models/merchandise';
import { Vendor } from '../models/vendor';
import { MerchandiseService } from '../services/merchandise.service';
import { VendorService } from '../services/vendor.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-merchandise-detail',
  templateUrl: './merchandise-detail.component.html',
  styleUrls: ['./merchandise-detail.component.css']
})
export class MerchandiseDetailComponent implements OnInit {
  id: any;
  merch: Merchandise = new Merchandise();
  vendors: Vendor[];
  vendor: Vendor = new Vendor();

  constructor(private merchService: MerchandiseService,
    private vendorService: VendorService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.merchService.getMerchById(this.id).subscribe(result => {
      this.merch = result;
      this.vendorService.getVendorById(this.merch.vendor).subscribe((result) => {
        this.vendor = result;
      })
    });
  }
  deleteMerchById(id: any) {
    console.log(id);
    this.merchService.deleteMerchById(id).subscribe((result) => {
      console.log('Merch Deleted Successfully..')
    });
    this.location.back();
  }
  goBack(): void {
    this.location.back();
  }
}