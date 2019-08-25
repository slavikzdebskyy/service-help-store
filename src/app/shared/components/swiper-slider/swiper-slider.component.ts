import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IImage } from '@service-help/interfaces';
import { SliderActions } from '@service-help/enums';

@Component({
  selector: 'sh-swiper-slider',
  templateUrl: './swiper-slider.component.html',
  styleUrls: ['./swiper-slider.component.scss'],
})
export class SwiperSliderComponent {

  @Input() activeIndex: number;
  @Input() images: IImage[];
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

}
