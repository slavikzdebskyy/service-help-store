import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { of, Observable } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';

class ProductServiceMock {
  public getAllLaptops(): Observable<object> {
    return of({});
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    const initialState: any = {
      products: [],
    };

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ProductService, useClass: ProductServiceMock },
        provideMockStore({ initialState }),
      ],
    })
      .overrideComponent(HomeComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
