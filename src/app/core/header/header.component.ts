import { Component, Output, EventEmitter } from '@angular/core';

  //  Modules
import { Constants } from './../../modules/constants/constants.module';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'sh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Output() openSideNav = new EventEmitter<boolean>();
  constants = Constants;
  searchForm!: FormGroup;
  wishListCount = 3;
  cartCout = 12;

  constructor() {
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
