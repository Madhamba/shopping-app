import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { productRoutes } from './products.routing';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { ProductInfoComponent } from './pages/product-info/product-info.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    HttpClientModule,
  ],
  declarations: [
    ProductsComponent,
    ProductInfoComponent,
  ],
  providers: [
    ProductsService,
  ],
})
export class ProductsModule { }
