import { IImage, IProductResponse } from '@service-help/interfaces';
import { BuyStatus, PayStatus, ProductType } from '@service-help/enums';

export class Product {

  public barCode: string;
  public name: string;
  public brand: string;
  public condition: string;
  public guarantee: number;
  public description: string;
  public images?: IImage[];
  public imageHead: IImage;
  public buyStatus: BuyStatus;
  public payStatus: PayStatus;
  public loacation: string;
  public seo: string;
  public createdAt: string;
  public updatedAt?: string;
  public price: number;
  public isInStock: boolean;
  public discount: number;
  public quantity: number;
  public productType: ProductType;

  constructor (public params: IProductResponse) {
    this.barCode = params.barCode;
    this.name = params.name;
    this.brand = params.brand;
    this.condition = params.condition;
    this.guarantee = params.guarantee;
    this.description = params.description;
    this.images = params.images ? params.images.slice(0) : [];
    this.imageHead = params.imageHead;
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
