import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { productsReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('Products', productsReducer),
  ],
})
export class ProductsStoreModule { }
