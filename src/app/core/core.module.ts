import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule, CarouselModule } from 'angular-bootstrap-md';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

  //  Modules
import { ProductListModule, ProductModule, MaterialModule } from '@service-help/modules';
import { ComponentsModule } from '@service-help/components';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';

  //  Components
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ProductModule,
    ComponentsModule,
    RouterModule,
    ProductListModule,
    ComponentsModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
    MaterialModule,
    // CarouselModule,
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavigationBarComponent,
    HomeComponent,
  ],
})
export class CoreModule { }
