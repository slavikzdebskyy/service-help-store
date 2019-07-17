import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
})
export class Constants {

  public static readonly MAIN_PHONE_NUMBER = 'tel:+380501234567';
  public static readonly MAIN_EMAIL = 'mailto:qaz@qaz.com';

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

  public static readonly CATEGORIES = [
    { name: 'All Categories', translateKey: 'CATEGORIES.all_categories' },
    { name: 'Servers', translateKey: 'CATEGORIES.servers' },
    { name: 'PC', translateKey: 'CATEGORIES.pc' },
    { name: 'Laptops', translateKey: 'CATEGORIES.laptops' },
    { name: 'Monitors', translateKey: 'CATEGORIES.monitors' },
  ];

}
