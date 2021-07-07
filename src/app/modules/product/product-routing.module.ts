import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  //  Modules
import { Constants } from '../constants/constants.module';

  //  Components
import { ProductComponent } from './product.component';

  //  Services
import { Route } from './../../services/router.service';

const routes: Routes = Route.withLayout([
  {
    path: Constants.ROUTERS.PRODUCT,
    component: ProductComponent,
  },
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule { }
