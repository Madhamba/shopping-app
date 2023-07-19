import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/products.interface';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  product?: Product;

  constructor(
    private activatedRouter: ActivatedRoute,
    private _productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe({
      next: ({ id }) => {
        this.getProduct(id);
      }
    });
  }

  getProduct(id: number): void {
    this._productsService.getById(id).subscribe({
      next: (product) => {
        this.product = {...product};
      }
    });
  }

}
