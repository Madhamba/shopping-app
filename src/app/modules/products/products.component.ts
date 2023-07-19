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

  addToCart(product: Product): void {
    const cart = localStorage.getItem('cart');
    if (cart) {
      let cartObj = JSON.parse(cart) as Product[];
      cartObj.push(product);
      localStorage.setItem('cart', JSON.stringify(cartObj));
    } else {
      localStorage.setItem('cart', JSON.stringify([product]));
    }
  }

  goToCart(): void {
    this.router.navigate(['cart']);
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['sign-in']);
  }

}
