import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { Constants } from './modules/constants/constants.module';

@Component({
  selector: 'sh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public title: string = 'service-help-store';

  constructor(translate: TranslateService) {
    translate.setDefaultLang(Constants.LANGUAGES.DEAFAULT);
  }
}
