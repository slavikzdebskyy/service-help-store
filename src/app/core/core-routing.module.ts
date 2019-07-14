import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  //  Modules
import { Constants } from './../modules/constants/constants.module';

  //  Components
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: Constants.ROUTERS.HOME,
    component: LayoutComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CoreRoutingModule { }
