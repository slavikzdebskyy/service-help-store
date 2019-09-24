import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

  //  Modules
import { Constants } from './modules/constants/constants.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: Constants.ROUTERS.HOME,
    loadChildren: './core/core.module#CoreModule',
  },
  {
    path: Constants.ROUTERS.PRODUCT,
    loadChildren: './modules/product/product.module#ProductModule',
  },
  {
    path: Constants.ROUTERS.LAPTOPS,
    loadChildren: './modules/product-list/product-list.module#ProductListModule',
  },
  {
    path: Constants.ROUTERS.PC,
    loadChildren: './modules/product-list/product-list.module#ProductListModule',
  },
  {
    path: Constants.ROUTERS.MONITORS,
    loadChildren: './modules/product-list/product-list.module#ProductListModule',
  },
  {
    path: Constants.ROUTERS.ACCESSORIES,
    loadChildren: './modules/product-list/product-list.module#ProductListModule',
  },
  {
    path: Constants.ROUTERS.DISCOUNTS,
    loadChildren: './modules/product-list/product-list.module#ProductListModule',
  },
  {
    path: '**',
    redirectTo: Constants.ROUTERS.HOME,
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
