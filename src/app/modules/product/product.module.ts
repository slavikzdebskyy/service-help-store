import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

  //  Modules
import { ComponentsModule } from './../../shared/components/components.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductImagesComponent } from './product-images/product-images.component';
import { ProductMainInfoComponent } from './product-main-info/product-main-info.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    ProductComponent,
    ProductImagesComponent,
    ProductMainInfoComponent,
  ],
})
export class ProductModule { }
