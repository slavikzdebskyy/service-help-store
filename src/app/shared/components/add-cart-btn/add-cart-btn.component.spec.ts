import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCartBtnComponent } from './add-cart-btn.component';
import { TranslateModule } from '@ngx-translate/core';

describe('AddCartBtnComponent', () => {
  let component: AddCartBtnComponent;
  let fixture: ComponentFixture<AddCartBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddCartBtnComponent],
      imports: [TranslateModule.forRoot()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCartBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
