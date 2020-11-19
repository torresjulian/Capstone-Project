import { Component, OnInit } from '@angular/core';
import { Vendor } from '../models/vendor';
import { VendorService } from '../services/vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  id: any;
  vendor: Vendor = new Vendor();
  constructor(private vendorService: VendorService, private route: ActivatedRoute, private _router: Router, private location: Location) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.vendorService.getVendorById(this.id).subscribe(result => {
      this.vendor = result;
      console.log(this.vendor);
    })
  }
  deleteVendorById(id: any) {
    this.vendorService.deleteVendorById(id).subscribe((result) => {
      console.log('Vendor Deleted Successfully..')
      this.location.back();
    })
  }
  goBack(): void {
    this.location.back();
  }
}