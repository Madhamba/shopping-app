import { Component, Directive, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Product } from './interfaces/products.interface';
import { Router } from '@angular/router';
import { CartService } from '../cart/services/cart.service';

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
    private _cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  get cartLength(): number {
    return this._cartService.getCart().length;
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

  addToCart(product: Product): void {
    this._cartService.saveProduct(product);
  }

  goToCart(): void {
    this.router.navigate(['cart']);
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['sign-in']);
  }

}
