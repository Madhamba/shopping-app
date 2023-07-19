import { Route } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { ProductInfoComponent } from "./pages/product-info/product-info.component";

export const productRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'all' },
  { path: 'all', component: ProductsComponent, title: 'Productos' },
  { path: ':id', component: ProductInfoComponent },
];