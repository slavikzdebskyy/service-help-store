import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

  //  Pipes
import { CurrencyPipe } from './currency.pipe';
import { DiscountPipe } from './discount.pipe';

const PIPES: any = [
  CurrencyPipe,
  DiscountPipe,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [...PIPES],
  exports: [...PIPES],
})
export class PipesModule { }
