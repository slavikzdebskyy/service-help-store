import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

import { IImage } from '@service-help/interfaces';
import { SliderActions } from '@service-help/enums';

@Component({
  selector: 'sh-swiper-slider',
  templateUrl: './swiper-slider.component.html',
  styleUrls: ['./swiper-slider.component.scss'],
})
export class SwiperSliderComponent {
  @Input()
  private activeIndex: number;
  @Input()
  public images: IImage[];

  @Output()
  private changeSlide: EventEmitter<SliderActions>;

  private actions: any;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.activeIndex = 0;
    this.images = [];
    this.changeSlide = new EventEmitter<SliderActions>();
    this.actions = SliderActions;
  }

  public onNextSlide(): void {
    this.changeSlide.emit(this.actions.next);
    this.changeDetectorRef.markForCheck();
  }

  public onPrevSlide(): void {
    this.changeSlide.emit(this.actions.prev);
    this.changeDetectorRef.markForCheck();
  }

}
