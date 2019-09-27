import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IBreadCrumb } from './../../interfaces/breadcrumb.interface';

@Component({
  selector: 'sh-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {

  public breadCrumbs: IBreadCrumb[] = [
    { name: 'ComPuters', route: '/dfdfdf' },
    { name: 'LaptoOgh', route: '/dfdfdf' },
    { name: 'Qwetry', route: '/dfdfdf' },
    { name: 'CNVHGYTUKF', route: '/dfdfdf' },
  ];

  constructor() { }
}
