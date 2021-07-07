import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { ProductsStoreModule } from './products-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    ProductsStoreModule,
  ],
})
export class RootStoreModule { }
