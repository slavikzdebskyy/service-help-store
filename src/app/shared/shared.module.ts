import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

  //  Modules
import { ComponentsModule } from '@service-help/components';
import { CurrencyPipe } from './pipes/currency.pipe';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ComponentsModule,
  ],
  declarations: [CurrencyPipe],
})
export class SharedModule { }
