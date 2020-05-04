import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Product } from '@service-help/models';
import { Subscription } from 'rxjs';
import { skipWhile } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { Store } from '@ngrx/store';
import { ProductsStoreActions, RootStoreState } from 'src/app/root-store';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { HOME_SWIPER_CONFIG } from './swiper.config';

@Component({
  selector: 'sh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SWIPER_CONFIG, useValue: HOME_SWIPER_CONFIG }],
})
export class HomeComponent implements OnInit, OnDestroy {
  public products: Product[];

  private subsIds: Subscription;

  constructor(
    private productService: ProductService,
    private cdRef: ChangeDetectorRef,
    private store$: Store<RootStoreState.State>,
  ) {
    this.subsIds = new Subscription();
    this.products = [];
  }

  public ngOnInit(): void {
    this.initProducts();
  }

  public ngOnDestroy(): void {
    this.subsIds.unsubscribe();
  }

  private initProducts(): void {
    const subsId: Subscription = this.productService
      .getAllLaptops()
      .pipe(skipWhile((products: Product[]) => !products))
      .subscribe((products: Product[]) => {
        this.products = products;
        this.cdRef.markForCheck();
        this.store$.dispatch(new ProductsStoreActions.AddProducts(products));
      });
    this.subsIds.add(subsId);
  }

}
