import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
})
export class ConstantsModule {

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
}
