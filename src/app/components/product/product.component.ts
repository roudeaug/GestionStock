import { Component, OnInit } from '@angular/core';
import { ProductMockService } from 'src/app/services/product.mock.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];

  /* Constructeur du composant */
  constructor(private productService: ProductMockService) {

  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

}
