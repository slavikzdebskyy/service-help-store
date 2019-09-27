import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Constants } from './../../modules/constants/constants.module';

@Component({
  selector: 'sh-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBarComponent {

  public routes: any;

  constructor() {
    this.routes = Constants.ROUTERS;
  }

}
