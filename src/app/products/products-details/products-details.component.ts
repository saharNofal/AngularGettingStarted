import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  pageTitle : string =" product detailes";
  product : IProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
