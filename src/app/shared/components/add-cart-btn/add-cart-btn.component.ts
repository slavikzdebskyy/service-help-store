import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sh-add-cart-btn',
  templateUrl: './add-cart-btn.component.html',
  styleUrls: ['./add-cart-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCartBtnComponent {
  @Input()
  public isInCart: boolean;
  @Output()
  private clickEvent: EventEmitter<void>;

  public constructor() {
    this.isInCart = false;
    this.clickEvent = new EventEmitter();
  }

  public onClickEvent(): void {
    this.clickEvent.emit();
  }

}
