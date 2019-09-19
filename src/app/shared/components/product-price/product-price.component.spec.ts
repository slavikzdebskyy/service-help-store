import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceComponent } from './product-price.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ProductPriceComponent', () => {
  let component: ProductPriceComponent;
  let fixture: ComponentFixture<ProductPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPriceComponent],
      imports: [TranslateModule.forRoot()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
