import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IImage } from '@service-help/interfaces';
import { SliderActions } from '@service-help/enums';

@Component({
  selector: 'sh-swiper-slider-mini',
  templateUrl: './swiper-slider-mini.component.html',
  styleUrls: ['./swiper-slider-mini.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperSliderMiniComponent {
  @Input()
  private activeIndex: number;
  @Input()
  public images: IImage[];
  @Input()
  public isHorizontal: boolean;
  @Output()
  public changeSlide: EventEmitter<SliderActions>;

  private actions: any;

  constructor() {
    this.activeIndex = 0;
    this.images = [];
    this.isHorizontal = false;
    this.changeSlide = new EventEmitter<SliderActions>();
    this.actions = SliderActions;
  }

  public onNextSlide(): void {
    this.changeSlide.emit(this.actions.next);
  }

  public onPrevSlide(): void {
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
