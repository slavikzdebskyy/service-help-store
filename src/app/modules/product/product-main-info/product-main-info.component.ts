import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '@service-help/models';

@Component({
  selector: 'sh-product-main-info',
  templateUrl: './product-main-info.component.html',
  styleUrls: ['./product-main-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductMainInfoComponent implements OnInit {

  @Input()
  public product?: Product;

  public isProductInCart: boolean;
  public isProductInWishList: boolean;

  public constructor() {
    this.isProductInCart = false;
    this.isProductInWishList = false;
  }

  public ngOnInit(): void {
  }

  public addToCart(): void {
    this.isProductInCart = !this.isProductInCart;
  }

  public addToWishList(): void {
    this.isProductInWishList = !this.isProductInWishList;
  }

  public toCompare(): void {

  }

}
