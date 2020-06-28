import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
    providedIn: 'root'
  })
export class Productservice {
    getProduct(): IProduct[] {
        return [{
            "productId": 1,
            "productName": "garden_cart",
            "productCode": "GDN-0023",
            "realeaseDate": "March 18,2019",
            "description": "garden_cart description",
            "price": 20,
            "starRating": 4,
            "imageUrl": "assets/images/garden_cart.png"
        }, {
            "productId": 2,
            "productName": "hammer",
            "productCode": "GDN-0024",
            "realeaseDate": "March 20,2019",
            "description": "hammer description",
            "price": 10,
            "starRating": 2,
            "imageUrl": "assets/images/hammer.png"
        }];
    }
}