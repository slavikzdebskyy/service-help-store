import { Component, OnInit } from '@angular/core';
import { SliderActions } from 'src/app/shared/enums/slider-actions.enum';

@Component({
  selector: 'sh-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss'],
})
export class ProductImagesComponent implements OnInit {

  public images: string[];
  private actions = SliderActions;
  public readonly ACTIVE_INDEX = 1;

  constructor() { }

  ngOnInit() {
    this. images = [
      'https://i2.rozetka.ua/goods/10442255/lenovo_81d600jyra_images_10442255072.jpg',
      'https://i2.rozetka.ua/goods/10442255/lenovo_81d600jyra_images_10442255948.jpg',
      'https://i2.rozetka.ua/goods/10442253/lenovo_81d600jyra_images_10442253836.jpg',
      'https://i1.rozetka.ua/goods/12531251/95236360_images_12531251944.jpg',
      'https://i1.rozetka.ua/goods/12531252/95236360_images_12531252592.jpg',
      'https://i1.rozetka.ua/goods/12531254/95236360_images_12531254734.jpg',
      'https://i1.rozetka.ua/goods/12531253/95236360_images_12531253312.jpg',
      'https://i1.rozetka.ua/goods/12531253/95236360_images_12531253852.jpg',
    ];
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
