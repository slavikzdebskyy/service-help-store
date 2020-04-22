import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  //  Modules
import { Constants } from '@service-help/modules';

  //  Components
import { HomeComponent } from './home/home.component';

  //  Services
import { Route } from '@service-help/services';

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
