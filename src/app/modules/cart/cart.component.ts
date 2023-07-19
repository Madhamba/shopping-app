import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../products/interfaces/products.interface';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Product[] = [];
  constructor(
    private router: Router,
    private _cartService: CartService,
  ) { }

  get total(): number {
    const prices = this.cart.map(product => product.price);
    return prices.reduce((accumulator, price) => accumulator + price, 0);
  }

  ngOnInit(): void {
    this.cart = this._cartService.getCart();
  }

  goToProducts(): void {
    this.router.navigate(['products']);
  }

  deleteItem(product: Product): void {
    this._cartService.deleteProduct(product);
    this.cart = this._cartService.getCart();
  }
}
