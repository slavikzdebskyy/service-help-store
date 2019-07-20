import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

  //  Modules
import { ComponentsModule } from './../shared/components/components.module';
import { MaterialModule } from '../modules/material/material.module';
import { ProductModule } from '../modules/product/product.module';
import { CoreRoutingModule } from './core-routing.module';

  //  Components
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    TranslateModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ProductModule,
    ComponentsModule,
    RouterModule,
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavigationBarComponent,
  ],
})
export class CoreModule { }
