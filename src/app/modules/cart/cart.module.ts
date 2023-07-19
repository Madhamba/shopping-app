import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { cartRouting } from './cart.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cartRouting),
  ],
  declarations: [CartComponent]
})
export class CartModule { }
