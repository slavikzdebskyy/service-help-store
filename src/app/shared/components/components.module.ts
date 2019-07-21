import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

  //  Modules
import { RouterModule } from '@angular/router';

  //  Components
import { SwiperSliderMiniComponent } from './swiper-slider/swiper-slider-mini.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

const COMPONENTS = [
  BreadcrumbsComponent,
  SwiperSliderMiniComponent,
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ComponentsModule { }
