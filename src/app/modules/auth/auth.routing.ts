import { Route } from "@angular/router";
import { AuthComponent } from "./auth.component";

export const authRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
  { path: 'sign-in', component: AuthComponent, title: 'Inicio de sesión' },
];