import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMainInfoComponent } from './product-main-info.component';

describe('ProductMainInfoComponent', () => {
  let component: ProductMainInfoComponent;
  let fixture: ComponentFixture<ProductMainInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMainInfoComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
