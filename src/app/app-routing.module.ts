import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

  //  Modules
import { Constants } from '@service-help/modules';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: Constants.ROUTERS.EMPTY,
    loadChildren: './core/core.module#CoreModule',
  },
  {
    path: Constants.ROUTERS.PRODUCT,
    loadChildren: './modules/product/product.module#ProductModule',
  },
  {
    path: Constants.ROUTERS.EMPTY,
    loadChildren: './modules/product-list/product-list.module#ProductListModule',
  },
  {
    path: '**',
    redirectTo: Constants.ROUTERS.EMPTY,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CoreModule,
    SharedModule,
    AuthModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
