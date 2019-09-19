import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

  //  Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

const MODULES: any = [
  CommonModule,
  MatButtonModule,
  MatMenuModule,
  MatSidenavModule,
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
