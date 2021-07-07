import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IImage } from '@service-help/interfaces';
import { SliderActions } from '@service-help/enums';

@Component({
  selector: 'sh-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductImagesComponent {
  @Input()
  public images: IImage[];

  private actions: any;
  public readonly ACTIVE_INDEX: number = 1;

  constructor() {
    this. images = [];
    this.actions = SliderActions;
  }

  private prevSlide(): void {
    const last: IImage = this.images[this.images.length - 1];
    this.images.pop();
    this.images.unshift(last);
  }

  private nextSlide(): void {
    const first: IImage = this.images[0];
    this.images.shift();
    this.images.push(first);
  }

  public changeSlide(action: SliderActions): void {
    if (action === this.actions.prev) {
      this.prevSlide();
    }
    if (action === this.actions.next)  {
      this.nextSlide();
    }
  }

}
