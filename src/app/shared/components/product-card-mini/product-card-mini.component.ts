import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '@service-help/models';

@Component({
  selector: 'sh-product-card-mini',
  templateUrl: './product-card-mini.component.html',
  styleUrls: ['./product-card-mini.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardMiniComponent implements OnInit {
  @Input()
  public product!: Product;
  @Input()
  public isInWishList: boolean;
  @Input()
  public isInCart: boolean;

  constructor() {
    this.isInWishList = false;
    this.isInCart = false;
  }

  public ngOnInit(): void {}

  public wishListToggle(): void {
    this.isInWishList = !this.isInWishList;
  }

  public addToCompare():void {}

  public addInCartToggle(): void {
    this.isInCart = !this.isInCart;
  }

}
