import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

  //  Modules
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ComponentsModule,
  ],
  declarations: [],
})
export class SharedModule { }
