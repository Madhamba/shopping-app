import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../products/interfaces/products.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Product[] = [];
  constructor(private router: Router) { }

  get total(): number {
    const prices = this.cart.map(product => product.price);
    return prices.reduce((accumulator, price) => accumulator + price, 0);
  }

  ngOnInit(): void {
    const savedProducts = localStorage.getItem('cart');
    this.cart = savedProducts ? JSON.parse(savedProducts) as Product[] : [];
  }

  goToProducts(): void {
    this.router.navigate(['products']);
  }

  deleteItem(product: Product): void {
    this.cart = this.cart.filter(item => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify([...this.cart]));
  }
}
