import { Component, OnInit, OnDestroy, ChangeDetectorRef, HostListener } from '@angular/core';
import { Product } from '@service-help/models';
import { Subscription } from 'rxjs';
import { skipWhile } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { Constants } from '@service-help/modules';

@Component({
  selector: 'sh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  public readonly CAROUSEL_BREAKPOINT: number = 768;
  public readonly CHUNK_BREAKPOINT: number = 992;
  public carouselDisplayMode: string;

  public products: Product[];
  public slides: Product[][];

  private subsIds: Subscription;

  constructor(
    private productService: ProductService,
    private changeDetection: ChangeDetectorRef,
    ) {
    this.subsIds = new Subscription();
    this.slides = [];
    this.carouselDisplayMode = Constants.CAROUSEL_CONFIG.mode.multiple;
    this.products = [];
  }

  public ngOnInit(): void {
    this.initProducts();
    this.onWindowResize();
  }

  public ngOnDestroy(): void {
    this.subsIds.unsubscribe();
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    if (window.innerWidth <= Constants.CAROUSEL_CONFIG.breakpointMode) {
      this.carouselDisplayMode = Constants.CAROUSEL_CONFIG.mode.single;
    } else {
      this.carouselDisplayMode = Constants.CAROUSEL_CONFIG.mode.multiple;
    }
    if (window.innerWidth <= Constants.CAROUSEL_CONFIG.chunkMode) {
      this.chunk(3);
    } else {
      this.chunk(4);
    }
    this.changeDetection.markForCheck();
  }

  private initProducts(): void {
    const subsId: Subscription = this.productService
      .getAllLaptops()
      .pipe(skipWhile((products: Product[]) => !products))
      .subscribe((products: Product[]) => {
        this.products = products;
        this.onWindowResize();
      });
    this.subsIds.add(subsId);
  }

  private chunk(chunkSize: number): void {
    this.slides = [];
    for (let i: number = 0; i < this.products.length; i += chunkSize) {
      this.slides.push(this.products.slice(i, i + chunkSize));
    }
  }

}
