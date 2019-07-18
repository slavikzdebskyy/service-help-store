import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

  //  Modules
import { Constants } from './modules/constants/constants.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: Constants.ROUTERS.HOME,
    loadChildren: './core/core.module#CoreModule',
  },
  {
    path: Constants.ROUTERS.PRODUCT,
    loadChildren: '../modules/product/product.module#ProductModule',
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
