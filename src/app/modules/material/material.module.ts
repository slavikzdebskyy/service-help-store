import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

  //  Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

const MODULES: any = [
  CommonModule,
  MatButtonModule,
  MatMenuModule,
  MatSidenavModule,
  MatTooltipModule,
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  exports: [
    ...MODULES,
  ],
})
export class MaterialModule { }
