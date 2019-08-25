import { Component, OnInit, Input } from '@angular/core';
import { IImage } from '@service-help/interfaces';
import { SliderActions } from '@service-help/enums';

@Component({
  selector: 'sh-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss'],
})
export class ProductImagesComponent implements OnInit {

  @Input() images: IImage[];
  private actions = SliderActions;
  public readonly ACTIVE_INDEX = 1;

  constructor() {
    this. images = [];
  }

  ngOnInit() {

  }

  private prevSlide(): void {
    const last = this.images[this.images.length - 1];
    this.images.pop();
    this.images.unshift(last);
  }

  private nextSlide(): void {
    const first = this.images[0];
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
