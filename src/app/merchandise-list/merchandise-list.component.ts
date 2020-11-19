import { Component, OnInit } from '@angular/core';
import { Merchandise } from '../models/merchandise';
import { MerchandiseService } from '../services/merchandise.service';

@Component({
  selector: 'app-merchandise-list',
  templateUrl: './merchandise-list.component.html',
  styleUrls: ['./merchandise-list.component.css']
})
export class MerchandiseListComponent implements OnInit {
  merchandise: Merchandise[];
  constructor(private merchService: MerchandiseService) { }
  ngOnInit(): void {
    this.getMerch();
  }
  getMerch() {
    return this.merchService.getMerch()
      .subscribe(
        merch => {
          console.log(merch);
          this.merchandise = merch
        }
      );
  }
}