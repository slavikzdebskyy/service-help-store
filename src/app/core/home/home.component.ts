import { Component, OnInit } from '@angular/core';
import { Product } from '@service-help/models';
import { PRODUCT_HARD } from 'src/app/modules/product/hardcoded-product';

@Component({
  selector: 'sh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public product: Product;

  constructor() {
    this.product = new Product(PRODUCT_HARD);
  }

  public ngOnInit(): void {}

}
