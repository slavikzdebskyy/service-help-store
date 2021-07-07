import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardMiniComponent } from './product-card-mini.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PipesModule } from '../../pipes/pipes.module';

describe('ProductCardMiniComponent', () => {
  let component: ProductCardMiniComponent;
  let fixture: ComponentFixture<ProductCardMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardMiniComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [PipesModule],
    })

    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductCardMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
