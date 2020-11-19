import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Vendor } from '../models/vendor';
import { VendorService } from '../services/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  id: any;
  vendor: Vendor = new Vendor();
  vendorForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private vendorService: VendorService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.vendorService.getVendorById(this.id).subscribe(result => {
      this.vendor = result;
      console.log(this.vendor);
    });
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
      console.log(this.vendor)
      this.vendorService.updateVendorById(this.vendor, this.id).subscribe(result => {
        console.log("Vendor Updated Successfully.");
        this.router.navigate(["/vendor-list"]);
      }, (err) => { console.log(err) })
    }
  }

  goBack() {
    this.location.back();
  }
}
