import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  //  Modules
import { Constants } from './../modules/constants/constants.module';

  //  Components
import { HomeComponent } from './home/home.component';

  //  Services
import { Route } from '../services/router.service';

const routes: Routes = Route.withLayout([
  {
    path: Constants.ROUTERS.EMPTY,
    component: HomeComponent,
  },
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
