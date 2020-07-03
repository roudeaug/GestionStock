import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  productForm: FormGroup;

  /* Type d'action a effectuer sur le produit */
  action: string = 'add';

  /* Produit courant */
  currentProduct: Product;

  /* Constructeur du composant */
  constructor(private productService: ProductService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.initProduct()
    this.loadProducts();
  }

  /* Initialisation du produit courant */
  initProduct() {
    this.currentProduct = new Product();
    this.createForm();
  }

  createForm() {
    //Formulaire de création de produit  
    this.productForm = this.fb.group({
      ref: ['', Validators.required],
      quantity: '',
      unitPrice: ''
  });
  }

  /* Chargement de la liste des produits depuis le serveur Spring Boot
     http://localhost:8080/api/products */
  loadProducts() {
    this.productService.getProducts().subscribe(
      data => {this.products = data},
      error => {'An error was occured'},
      () => {console.log('Loading products was done')}
    );
  }

  /* Ajout d'un produit depuis le formulaire dans la liste des produits du serveur */
  addProduct() {
    const product: Product = this.productForm.value;
    this.productService.addProduct(product).subscribe(
      res => {
        this.initProduct();
        this.loadProducts();
      }
    );
  }

  /* Modification d'un produit depuis le formulaire dans la liste des produits du serveur */
  updateProduct() {
    this.productService.updateProduct(this.currentProduct).subscribe(
      res => {
        this.currentProduct = new Product();
        this.loadProducts();
      }
    );
  }

  /* Suppression d'un produit depuis le formulaire dans la liste des produits du serveur */
  deleteProduct() {
    this.productService.deleteProduct(this.currentProduct.ref).subscribe(
      res => {
        this.currentProduct = new Product();
        this.loadProducts();
      }
    );
  }
}
