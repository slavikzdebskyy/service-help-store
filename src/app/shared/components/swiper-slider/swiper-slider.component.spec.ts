import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperSliderComponent } from './swiper-slider.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SwiperSliderComponent', () => {
  let component: SwiperSliderComponent;
  let fixture: ComponentFixture<SwiperSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwiperSliderComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SwiperSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create test', () => {
    expect(component).toBeTruthy();
  });
});
