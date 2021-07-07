import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

  //  Modules
import { ProductRoutingModule } from './product-routing.module';
import { ComponentsModule } from '@service-help/components';

  //  Components
import { ProductComponent } from './product.component';
import { ProductImagesComponent } from './product-images/product-images.component';
import { ProductMainInfoComponent } from './product-main-info/product-main-info.component';

  //  Services
import { ProductService } from 'src/app/services/product.service';

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
  providers: [ProductService],
})
export class ProductModule { }
