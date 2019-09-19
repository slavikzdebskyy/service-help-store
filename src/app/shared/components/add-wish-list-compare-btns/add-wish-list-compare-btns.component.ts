import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sh-add-wish-list-compare-btns',
  templateUrl: './add-wish-list-compare-btns.component.html',
  styleUrls: ['./add-wish-list-compare-btns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddWishListCompareBtnsComponent {
  @Input()
  public isInWishList: boolean;
  @Input()
  public isSmall: boolean;
  @Output()
  private wishListClickEmit: EventEmitter<void>;
  @Output()
  private compareClickEmit: EventEmitter<void>;

  public constructor() {
    this.isInWishList = false;
    this.isSmall = false;
    this.wishListClickEmit = new EventEmitter();
    this.compareClickEmit = new EventEmitter();
  }

  public onWishListClickEmit(): void {
    this.wishListClickEmit.emit();
  }
  public onCompareClickEmit(): void {
    this.compareClickEmit.emit();
  }

}
