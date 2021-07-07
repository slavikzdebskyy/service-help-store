import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

  //  Modules
import { Constants } from './../../modules/constants/constants.module';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'sh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output()
  private openSideNav: EventEmitter<boolean>;

  public constants: any;
  public searchForm!: FormGroup;
  public wishListCount: number;
  public cartCout: number;

  constructor() {
    this.openSideNav = new EventEmitter<boolean>();
    this.constants = Constants;
    this.wishListCount = 3;
    this.cartCout = 12;
    this.initForm();
  }

  private initForm(): void {
    this.searchForm = new FormGroup({
      category: new FormControl(this.constants.CATEGORIES[0].name),
      searchKey: new FormControl(''),
    });
  }

  public onOpenSideNav(): void {
    this.openSideNav.emit(true);
  }

  public onSearch(): void {
    // console.log(this.searchForm.getRawValue());
  }

}
