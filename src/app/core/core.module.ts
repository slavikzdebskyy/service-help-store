import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

  //  Modules
import { CoreRoutingModule } from './core-routing.module';

  //  Components
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    TranslateModule,
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class CoreModule { }
