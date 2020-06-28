import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { Productservice } from './product.service'

@Component({
  selector: 'pm-products',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css']
})
export class ProductLstComponent implements OnInit {
  errorMessage: any;

  constructor(private productServices: Productservice) {
    // this._listFilter= "cart";
  }

  ngOnInit(): void {
    this.productServices.getProduct().subscribe({
      next: products => {
        this.products = products;
        this.filterProudects = this.products;
      },
      error: err => this.errorMessage = err
    });
  
  }
  pageTitle: string = "ProducttList";
  imageWidth: number = 50;
  imageMargen: number = 2;
  showImage: boolean = false;
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filterProudects = this.listFilter ? this.perFormFilter(this.listFilter) : this.products;
  }

  perFormFilter(filterby: string): IProduct[] {
    filterby = filterby.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterby) != -1)
  }


  filterProudects: IProduct[];
  products: IProduct[] = [];

  ToggelImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'product list ' + message;
  }
}