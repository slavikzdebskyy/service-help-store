import { IImage } from './image.interface';
import { PayStatus, BuyStatus, ProductType } from '@service-help/enums';

export interface IProduct {
  barCode: string;
  brand: string;
  condition: string;
  guarantee: number;
  description: string;
  images?: IImage[];
  buyStatus: BuyStatus;
  payStatus: PayStatus;
  loacation?: string;
  seo?: string;
  createdAt: string;
  updatedAt?: string;
  price: number;
  isInStock: boolean;
  discount: number;
  quantity: number;
  productType: ProductType;
}
