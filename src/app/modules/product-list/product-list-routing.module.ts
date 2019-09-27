import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  //  Modules
import { Constants } from '../constants/constants.module';

  //  Components
import { ProductListComponent } from './product-list.component';

  //  Services
import { Route } from './../../services/router.service';

const routes: Routes = Route.withLayout([
  {
    path: Constants.ROUTERS.LAPTOPS,
    component: ProductListComponent,
  },
  {
    path: Constants.ROUTERS.PC,
    component: ProductListComponent,
  },
  {
    path: Constants.ROUTERS.MONITORS,
    component: ProductListComponent,
  },
  {
    path: Constants.ROUTERS.ACCESSORIES,
    component: ProductListComponent,
  },
  {
    path: Constants.ROUTERS.DISCOUNTS,
    component: ProductListComponent,
  },
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductListRoutingModule { }
