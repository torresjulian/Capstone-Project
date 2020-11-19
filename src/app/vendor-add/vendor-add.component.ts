import { Component, OnInit } from '@angular/core';
import { Vendor } from '../models/vendor';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { VendorService } from '../services/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.css']
})
export class VendorAddComponent implements OnInit {
  vendorForm: FormGroup;
  submitted = false;
  vendor: Vendor = new Vendor();
  constructor(private formBuilder: FormBuilder, private vendorService: VendorService, private router: Router) { }

  ngOnInit(): void {
    this.vendorForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }
  get f() {
    return this.vendorForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.vendorForm.invalid) {
      return;
    } else {
      console.log(this.vendor);
      this.vendorService.addVendor(this.vendor).subscribe(result => {
        console.log("Vendor added successfully");
        this.router.navigate(["vendor-list"]); 
      }, (err) => { console.log(err)  })
    }
  }
}