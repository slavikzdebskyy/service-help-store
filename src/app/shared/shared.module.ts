import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

  //  Modules
import { ComponentsModule } from '@service-help/components';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ComponentsModule,
    PipesModule,
  ],
  declarations: [],
})
export class SharedModule { }
