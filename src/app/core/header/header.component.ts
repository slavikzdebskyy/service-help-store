import { Component, OnInit } from '@angular/core';

  //  Modules
import { Constants } from './../../modules/constants/constants.module';

@Component({
  selector: 'sh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constants = Constants;

  constructor() { }

  ngOnInit() {
  }

}
