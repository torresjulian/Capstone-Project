import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Merchandise } from '../models/merchandise';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';

const httpOptions = ({
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}),
  ResponseType: 'Merchandise'
});
@Injectable({
  providedIn: 'root'
})
export class MerchandiseService {
  private merchUrl = 'http://localhost:5000/api/merch';
  constructor(private http: HttpClient) { }
  getMerch(): Observable<Merchandise[]>{
    return this.http.get<Merchandise[]>(this.merchUrl);
  }
  getMerchById(id: any): Observable<Merchandise> {
    return this.http.get<Merchandise>(`${this.merchUrl}ById/${id}`);
  }
  addMerch(merch: Merchandise): Observable<Merchandise> {
    return this.http.post<Merchandise>(this.merchUrl, merch, httpOptions);
  }
  updateMerchById(merch: Merchandise, id: any): Observable<Merchandise> {
    return this.http.put<Merchandise>(`${this.merchUrl}/${id}`, merch, httpOptions);
  }
  deleteMerchById(id: any): Observable<Merchandise> {
    return this.http.delete<Merchandise>(`${this.merchUrl}/${id}`);
  }
}
