import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'sh-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  public test: string;

  constructor(public route: ActivatedRoute) {
    this.test = '';
    this.route.url.subscribe((params: UrlSegment[]) => {
      this.test = params[0].path;
    });
  }

  public ngOnInit(): void {}

}
