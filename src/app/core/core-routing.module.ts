import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  //  Modules
import { Constants } from './../modules/constants/constants.module';

  //  Components
import { LayoutComponent } from './layout/layout.component';

  //  Services
import { Route } from '../services/router.service';

const routes: Routes = Route.withLayout([
  // components...
]);

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CoreRoutingModule { }
