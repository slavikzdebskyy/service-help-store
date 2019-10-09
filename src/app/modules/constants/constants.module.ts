import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
})
export class Constants {

  public static readonly MAIN_PHONE_NUMBER: string = 'tel:+380501234567';
  public static readonly MAIN_EMAIL: string = 'mailto:qaz@qaz.com';

  public static readonly LANGUAGES: any = {
    DEAFAULT: 'en',
  };

  public static readonly ROUTERS: any = {
    EMPTY: '',
    LOGIN: 'login',
    REGISTRATION: 'registration',
    PRODUCT: 'product/:id',
    LAPTOPS: 'laptops',
    PC: 'pc',
    MONITORS: 'monitors',
    ACCESSORIES: 'accessories',
    DISCOUNTS: 'discounts',
  };

  public static readonly ROUTERS_API: any = {
    ADMIN: {
      LOGIN: '',
      LOGOUT: '',
    },
  };

  public static readonly STORAGE_KEYS: any = {
    ADMIN_KEY: '',
  };

  public static readonly CONTACTS: any = {
    TEL_MAIN: '(050) 123 45 67',
  };

  public static readonly CATEGORIES: any = [
    { name: 'All Categories', translateKey: 'CATEGORIES.all_categories' },
    { name: 'Discounts', translateKey: 'CATEGORIES.discounts' },
    { name: 'PC', translateKey: 'CATEGORIES.pc' },
    { name: 'Laptops', translateKey: 'CATEGORIES.laptops' },
    { name: 'Monitors', translateKey: 'CATEGORIES.monitors' },
    { name: 'Accessories', translateKey: 'CATEGORIES.accessories' },
  ];

  public static readonly CAROUSEL_CONFIG: any = {
    mode: {
      multiple: 'multiple',
      single: 'single',
    },
    breakpointMode: 768,
    chunkMode: 992,
  };

}
