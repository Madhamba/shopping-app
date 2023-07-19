import { Route } from "@angular/router";

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'auth/sign-in' },
  { path: 'sign-in', pathMatch: 'full', redirectTo: 'auth/sign-in' },
  {
    path: '',
    children: [
      { path: 'auth', loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule) },
      { path: 'products', loadChildren: () => import('src/app/modules/products/products.module').then(m => m.ProductsModule) },
      { path: 'cart', loadChildren: () => import('src/app/modules/cart/cart.module').then(m => m.CartModule) },
    ],
  },
  { path: '**', redirectTo: 'auth/sign-in' },
];