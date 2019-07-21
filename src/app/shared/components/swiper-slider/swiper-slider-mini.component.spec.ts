import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperSliderMiniComponent } from './swiper-slider-mini.component';

describe('SwiperSliderComponent', () => {
  let component: SwiperSliderMiniComponent;
  let fixture: ComponentFixture<SwiperSliderMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwiperSliderMiniComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperSliderMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
