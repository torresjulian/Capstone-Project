import { Component, OnInit } from '@angular/core';
import { Merchandise } from '../models/merchandise';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Vendor } from '../models/vendor';
import { MerchandiseService } from '../services/merchandise.service';
import { VendorService } from '../services/vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-merchandise-edit',
  templateUrl: './merchandise-edit.component.html',
  styleUrls: ['./merchandise-edit.component.css']
})
export class MerchandiseEditComponent implements OnInit {
  id: any;
  merch: Merchandise = new Merchandise();
  vendors: Vendor[];
  merchForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private merchService: MerchandiseService,
    private vendorService: VendorService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.merchService.getMerchById(this.id).subscribe(result => {
      this.merch = result;
      console.log(this.merch);
    });
    this.vendorService.getVendors().subscribe(result => {
      this.vendors = result;
      console.log(this.vendors)
    })
    this.merchForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      details: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
      vendor: ['', Validators.required]
    });
  }
  get f() {
    return this.merchForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.merchForm.invalid) {
      return;
    } else {
      console.log(this.merch)
      this.merchService.updateMerchById(this.merch, this.id).subscribe(result => {
        console.log("Merch Updated Successfully.");
        this.router.navigate(["/merchandise-list"]);
      }, (err) => { console.log(err) })
    }
  }
  goBack() {
    this.location.back();
  }
}