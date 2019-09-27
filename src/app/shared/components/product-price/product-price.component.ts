import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sh-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPriceComponent {
  @Input() public price: number;
  @Input() public isStock?: boolean;
  @Input() public discount?: number;
  @Input() public isSmall?: boolean;

  constructor() {
    this.price = 0;
  }

  public get discountPrice(): number {
    if (this.discount) {
      return this.price - (this.price * this.discount) / 100;
    }
    return 0;
  }
}
