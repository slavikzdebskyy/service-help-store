import { Component, OnInit } from '@angular/core';
import { Constants } from './../../modules/constants/constants.module';

@Component({
  selector: 'sh-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {

  public routes = Constants.ROUTERS;

  constructor() { }

  ngOnInit() {
  }

}
