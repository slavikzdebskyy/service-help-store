import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

  //  Modules
import { ComponentsModule } from './../../shared/components/components.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductImagesComponent } from './product-images/product-images.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    ComponentsModule,
  ],
  declarations: [ProductComponent, ProductImagesComponent],
})
export class ProductModule { }
