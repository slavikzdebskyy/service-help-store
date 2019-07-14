import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
})
export class Constants {

  public static readonly LANGUAGES = {
    DEAFAULT: 'en',
  };

  public static readonly ROUTERS = {
    HOME: '',
    LOGIN: 'login',
    REGISTRATION: 'registration',
  };

  public static readonly ROUTERS_API = {
    ADMIN: {
      LOGIN: '',
      LOGOUT: '',
    },
  };

  public static readonly STORAGE_KEYS = {
    ADMIN_KEY: '',
  };

  public static readonly CONTACTS = {
    TEL_MAIN: '(050) 123 45 67',
  };

}
