import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductMockService {

  /* Liste de produits */
  private PRODUCTS: Product[] = [];

  /* Constructeur du service */
  constructor() {
    let p1: Product = new Product('Livre', 50, 20);
    let p2: Product = new Product('Cahier', 200, 5.25);
    let p3: Product = new Product('Test', 500, 2.10);
    this.PRODUCTS.push(p1,p2,p3);
  }

  /* Getter */
  public getProducts(): Product[] {
    return this.PRODUCTS;
  }
}
