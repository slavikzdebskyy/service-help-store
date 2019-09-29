import { IImage } from './image.interface';
import { ProductType, BuyStatus, PayStatus } from '@service-help/enums';

export interface IProductResponse {
  barCode: string;
  name: string;
  brand: string;
  type?: string;
  color?: string;
  condition: string;
  guarantee: number;
  monitorSize?: number;
  monitorResolution?: string;
  monitorCoverType?: string;
  monitorType?: string;
  processor?: string;
  coreAmount?: number;
  memoryRamType?: string;
  memoryRamAmount?: number;
  videoType?: string;
  videoMemoryAmount?: number;
  video?: string;
  driveType?: string;
  driveMemoryAmount?: number;
  driveSecondMemoryAmount?: number;
  options?: string;
  description: string;
  images?: IImage[];
  imageHead: IImage;
  buyStatus: BuyStatus;
  payStatus: PayStatus;
  loacation?: string;
  seo?: string;
  contrast?: number;
  brightness?: number;
  light?: string;
  connectors?: string;
  productType: ProductType;
  createdAt: string;
  updatedAt?: string;
  price: number;
  isInStock: boolean;
  discount?: number;
  quantity: number;
}
