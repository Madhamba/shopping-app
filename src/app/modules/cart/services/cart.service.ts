import { Injectable } from '@angular/core';
import { Product } from '../../products/interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCart(): Product[] {
    const savedProducts = localStorage.getItem('cart');
    if (savedProducts) {
      const cart = JSON.parse(savedProducts) as Product[];
      return cart;
    }
    return [];
  }

  saveProduct(product: Product): void {
    const cart = localStorage.getItem('cart');
    if (cart) {
      let cartObj = JSON.parse(cart) as Product[];
      cartObj.push(product);
      localStorage.setItem('cart', JSON.stringify(cartObj));
    } else {
      localStorage.setItem('cart', JSON.stringify([product]));
    }
  }

  deleteProduct(product: Product): void {
    const cart = this.getCart().filter(item => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify([...cart]));
  }

}
