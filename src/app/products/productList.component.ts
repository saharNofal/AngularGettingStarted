import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './productList.component.html'
  })
export class ProductLstComponent{
pageTitle : string = "ProducttList"; 
imageWidth : number= 50;
imageMargen:number=2;
showImage : boolean = false;
listFilter: string ='cart';
products: any[]=[{
  "productId":"1",
 "productName":"garden_cart",
 "productCode":"GDN-0023",
 "realeaseDate":"March 18,2019",
 "description":"garden_cart description",
 "price":"20",
 "starRating":"4",
 "imageUrl":"assets/images/garden_cart.png"
 },{
   "productId":"2",
  "productName":"hammer",
  "productCode":"GDN-0024",
  "realeaseDate":"March 20,2019",
  "description":"hammer description",
  "price":"10",
  "starRating":"3.5",
  "imageUrl":"assets/images/hammer.png"
  }];

  ToggelImage(): void {
  this.showImage= ! this.showImage;
  }
}