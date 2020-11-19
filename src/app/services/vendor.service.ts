import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from '../models/vendor';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private vendorUrl = 'http://localhost:5000/api/vendors';
  constructor(private http: HttpClient) { }
  getVendors(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>(this.vendorUrl);
  }
  getVendorById(id: any): Observable<Vendor> {
    return this.http.get<Vendor>(`${this.vendorUrl}/${id}`);
  }
  addVendor(vendor: Vendor): Observable<any> {
    return this.http.post<any>(this.vendorUrl, vendor, httpOptions);
  }
  updateVendorById(vendor: Vendor, id: any): Observable<Vendor> {
    return this.http.put<Vendor>(`${this.vendorUrl}/${id}`, vendor, httpOptions);
  }
  deleteVendorById(id: any): Observable<Vendor> {
    return this.http.delete<Vendor>(`${this.vendorUrl}/${id}`);
  }
}