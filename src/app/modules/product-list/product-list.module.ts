import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  // Modules
import { ProductListRoutingModule } from './product-list-routing.module';
import { ComponentsModule } from '@service-help/components';

  // Components
import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProductListRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    ProductListComponent,
  ],
})
export class ProductListModule { }
