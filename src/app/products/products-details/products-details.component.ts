import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  pageTitle : string =" product detailes";
  product : IProduct;
  constructor(private route: ActivatedRoute,
              private router: Router ) {
   }

  ngOnInit(): void {
    let id= +this.route.snapshot.paramMap.get('id');
    this.pageTitle=`:${id}`
  }
  onBack ():void {
    this.router.navigate(['/products'])
  }
}
