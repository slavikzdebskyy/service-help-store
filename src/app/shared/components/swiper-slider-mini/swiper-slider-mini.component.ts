import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IImage } from '@service-help/interfaces';
import { SliderActions } from '@service-help/enums';

@Component({
  selector: 'sh-swiper-slider-mini',
  templateUrl: './swiper-slider-mini.component.html',
  styleUrls: ['./swiper-slider-mini.component.scss'],
})
export class SwiperSliderMiniComponent {

  @Input() activeIndex: number;
  @Input() images: IImage[];
  @Input() isHorizontal = false;
  @Output() changeSlide = new EventEmitter<SliderActions>();
  private actions = SliderActions;

  constructor() {
    this.activeIndex = 0;
    this.images = [];
  }

  public onNextSlide() {
    this.changeSlide.emit(this.actions.next);
  }

  public onPrevSlide() {
    this.changeSlide.emit(this.actions.prev);
  }

  public onChangeSlide(index: number): void {
    if (index === this.activeIndex) {
      return;
    }
    if (index < this.activeIndex) {
      this.onPrevSlide();
    } else {
      this.onNextSlide();
    }
  }
}
