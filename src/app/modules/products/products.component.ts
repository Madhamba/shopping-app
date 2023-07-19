import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Product } from './interfaces/products.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private _productsService: ProductsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this._productsService.getAll().subscribe({
      next: (response) => {
        this.products = [...response];
      }
    });
  }

  productInfo(id: number): void {
    this.router.navigate(['products', id]);
  }

  addToCart(product: Product) {
    console.log('product: ', product);
  }

}
