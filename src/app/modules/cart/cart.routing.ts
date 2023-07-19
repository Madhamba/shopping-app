import { Route } from "@angular/router";
import { CartComponent } from "./cart.component";

export const cartRouting: Route[] = [
  { path: '', component: CartComponent, title: 'Carrito de compras' },
];