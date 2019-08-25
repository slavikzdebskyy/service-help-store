import { Component, OnInit } from '@angular/core';
import { Product } from '@service-help/models';
import { PRODUCT_HARD } from './hardcoded-product';

@Component({
  selector: 'sh-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  public product: Product;

  constructor() {
    this.product = new Product(PRODUCT_HARD);
  }

  ngOnInit() {
  }

}
