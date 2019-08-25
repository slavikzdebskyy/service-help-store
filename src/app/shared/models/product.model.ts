import { IImage, IProductResponse } from '@service-help/interfaces';
import { BuyStatus, PayStatus, ProductType } from '@service-help/enums';

export class Product {

  barCode: string;
  brand: string;
  condition: string;
  guarantee: number;
  description: string;
  images?: IImage[];
  buyStatus: BuyStatus;
  payStatus: PayStatus;
  loacation: string;
  seo: string;
  createdAt: string;
  updatedAt?: string;
  price: number;
  isInStock: boolean;
  discount: number;
  quantity: number;
  productType: ProductType;

  constructor (public params: IProductResponse) {
    this.barCode = params.barCode;
    this.brand = params.brand;
    this.condition = params.condition;
    this.guarantee = params.guarantee;
    this.description = params.description;
    this.images = params.images ? params.images.slice(0) : [];
    this.buyStatus = params.buyStatus;
    this.payStatus = params.payStatus;
    this.loacation = params.loacation || '';
    this.seo = params.seo || '';
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt || '';
    this.price = params.price;
    this.isInStock = params.isInStock;
    this.discount = params.discount || 0;
    this.quantity = params.quantity;
    this.productType = params.productType;
  }

}
