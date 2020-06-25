import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './productList.component.html',
    styleUrls:['./productList.component.css']
  })
export class ProductLstComponent implements OnInit{
  ngOnInit(): void {
    console.log("oninit")
  }
pageTitle : string = "ProducttList"; 
imageWidth : number= 50;
imageMargen:number=2;
showImage : boolean = false;
_listFilter: string ;
get listFilter() : string{
  return this._listFilter;
}
set listFilter(value : string)  {
   this._listFilter = value;
   this.filterProudects= this.listFilter?this.perFormFilter(this.listFilter): this.products;
}

perFormFilter(filterby : string) : IProduct []{
filterby =filterby.toLocaleLowerCase();
return this.products.filter((product: IProduct)=> product.productName.toLocaleLowerCase().indexOf(filterby)!= -1)
}
constructor(){
  this.filterProudects= this.products;
  this._listFilter= "cart";
}

filterProudects: IProduct[];
products: IProduct[]=[{
  "productId":1,
 "productName":"garden_cart",
 "productCode":"GDN-0023",
 "realeaseDate":"March 18,2019",
 "description":"garden_cart description",
 "price":20,
 "starRating":4,
 "imageUrl":"assets/images/garden_cart.png"
 },{
   "productId":2,
  "productName":"hammer",
  "productCode":"GDN-0024",
  "realeaseDate":"March 20,2019",
  "description":"hammer description",
  "price":10,
  "starRating":3.5,
  "imageUrl":"assets/images/hammer.png"
  }];

  ToggelImage(): void {
  this.showImage= ! this.showImage;
  }
}