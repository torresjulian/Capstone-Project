import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Merchandise } from '../models/merchandise';
import { Vendor } from '../models/vendor';
import { MerchandiseService } from '../services/merchandise.service';
import { VendorService } from '../services/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchandise-add',
  templateUrl: './merchandise-add.component.html',
  styleUrls: ['./merchandise-add.component.css']
})
export class MerchandiseAddComponent implements OnInit {
  merchForm: FormGroup;
  submitted = false;
  merch: Merchandise = new Merchandise();
  vendors: Vendor[];

  constructor(private merchService: MerchandiseService,
    private vendorService: VendorService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.merchForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      details: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
      vendor: ['', Validators.required]
    });
    this.vendorService.getVendors().subscribe(result => {
      this.vendors = result;
      console.log(this.vendors)
    })
  }

  get f() {
    return this.merchForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.merchForm.invalid) {
      return;
    }

    console.log(this.merch)
    this.merchService.addMerch(this.merch).subscribe(result => {
      console.log("Merchandise Added Successfully.");
      this.router.navigate(["/merchandise-list"]);
    }, (err) => { console.log(err) })
  }
}