import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { SliderActions } from '../../enums/slider-actions.enum';

@Component({
  selector: 'sh-swiper-slider',
  templateUrl: './swiper-slider.component.html',
  styleUrls: ['./swiper-slider.component.scss'],
})
export class SwiperSliderComponent implements OnInit{

  @Input() activeIndex: number;
  @Input() images: string[];
  @Output() changeSlide = new EventEmitter<SliderActions>();
  private actions = SliderActions;
  public activeImg: string;

  constructor() { }

  ngOnInit() {
    this.activeImg = this.images[this.activeIndex];
  }

  public onNextSlide() {
    this.changeSlide.emit(this.actions.next);
  }

  public onPrevSlide() {
    this.changeSlide.emit(this.actions.prev);
  }

}
