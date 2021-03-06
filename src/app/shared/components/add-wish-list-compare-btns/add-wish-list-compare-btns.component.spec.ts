import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddWishListCompareBtnsComponent } from './add-wish-list-compare-btns.component';
import { TranslateModule } from '@ngx-translate/core';

describe('AddWishListCompareBtnsComponent', () => {
  let component: AddWishListCompareBtnsComponent;
  let fixture: ComponentFixture<AddWishListCompareBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddWishListCompareBtnsComponent],

      imports: [
        TranslateModule.forRoot(),
        MatTooltipModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWishListCompareBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
