import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sh-swiper-slider-mini',
  templateUrl: './swiper-slider-mini.component.html',
  styleUrls: ['./swiper-slider-mini.component.scss'],
})
export class SwiperSliderMiniComponent implements OnInit {

  @Input() images: string[];
  @Input() isHorizontal = false;

  constructor() { }

  ngOnInit() {
  }

  public prevSlide(): void {
    const last = this.images[this.images.length - 1];
    this.images.pop();
    this.images.unshift(last);
  }

  public nextSlide(): void {
    const first = this.images[0];
    this.images.shift();
    this.images.push(first);
  }

  public changeSlide(index: number): void {
    if (index === 1) {
      return;
    }
    if (index < 1) {
      this.prevSlide();
    } else {
      this.nextSlide();
    }
  }
}
