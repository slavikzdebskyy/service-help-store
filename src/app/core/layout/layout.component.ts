import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sh-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {

  public isSideNavOpened: boolean;

  constructor() {
    this.isSideNavOpened = false;
  }

  public toggleSideNav(event?: boolean): void {
    this.isSideNavOpened = event || false;
  }
}
