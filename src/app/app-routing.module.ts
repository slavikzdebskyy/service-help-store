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
    loadChildren: (): any => import('./core/core.module').then((m: any) => m.CoreModule),
  },
  {
    path: Constants.ROUTERS.PRODUCT,
    loadChildren: (): any => import('./modules/product/product.module').then((m: any) => m.ProductModule),
  },
  {
    path: Constants.ROUTERS.EMPTY,
    loadChildren: (): any => import('./modules/product-list/product-list.module').then((m: any) => m.ProductListModule),
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
