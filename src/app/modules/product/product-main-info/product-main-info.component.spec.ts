import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMainInfoComponent } from './product-main-info.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProductMainInfoComponent', () => {
  let component: ProductMainInfoComponent;
  let fixture: ComponentFixture<ProductMainInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMainInfoComponent],
      schemas: [NO_ERRORS_SCHEMA],
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
