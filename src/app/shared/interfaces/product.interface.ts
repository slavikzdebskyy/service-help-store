import { IImage } from './image.interface';
import { ProductType } from '../enums/product-type.enum';
import { PayStatus, BuyStatus } from '@service-help/enums';

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
