import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sh-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  isSideNavOpened = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleSideNav(event?: boolean): void {
    this.isSideNavOpened = event || false;
  }
}
