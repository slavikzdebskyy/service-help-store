import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

  //  Modules
import { RouterModule } from '@angular/router';
import { PipesModule } from './../pipes/pipes.module';

  //  Components
import { SwiperSliderMiniComponent } from './swiper-slider-mini/swiper-slider-mini.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SwiperSliderComponent } from './swiper-slider/swiper-slider.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { AddCartBtnComponent } from './add-cart-btn/add-cart-btn.component';
import { AddWishListCompareBtnsComponent } from './add-wish-list-compare-btns/add-wish-list-compare-btns.component';
import { ProductCardMiniComponent } from './product-card-mini/product-card-mini.component';

const COMPONENTS: any = [
  BreadcrumbsComponent,
  SwiperSliderMiniComponent,
  SwiperSliderComponent,
  ProductPriceComponent,
  AddCartBtnComponent,
  AddWishListCompareBtnsComponent,
  ProductCardMiniComponent,
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    PipesModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ComponentsModule { }
