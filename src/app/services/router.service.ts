import { Routes } from '@angular/router';

import { Constants } from './../modules/constants/constants.module';
import { LayoutComponent } from '../core/layout/layout.component';

export class Route {
// tslint:disable-next-line:member-access
  static withLayout(routes: Routes): Routes {
    return [
      {
        path: Constants.ROUTERS.HOME,
        component: LayoutComponent,
        children: routes,
      },
    ];
  }
}
