import { Component, OnInit, Output, EventEmitter } from '@angular/core';

  //  Modules
import { Constants } from './../../modules/constants/constants.module';

@Component({
  selector: 'sh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output() openSideNav = new EventEmitter<boolean>();
  constants = Constants;

  constructor() { }

  ngOnInit() {
  }

  public onOpenSideNav(): void {
    this.openSideNav.emit(true);
  }

}
