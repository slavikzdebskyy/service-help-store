import { Product } from './product.model';
import { IProductResponse, ILaptop } from '@service-help/interfaces';
import { ProductType } from '../enums/product-type.enum';

export class Laptop extends Product implements ILaptop {
  type: string;
  color: string;
  monitorSize: number;
  monitorResolution: string;
  monitorCoverType: string;
  monitorType: string;
  processor: string;
  coreAmount: number;
  memoryRamType: string;
  memoryRamAmount: number;
  videoType: string;
  videoMemoryAmount: number;
  video: string;
  driveType: string;
  driveMemoryAmount: number;
  driveSecondMemoryAmount: number;
  options: string;
  productType: ProductType;

  constructor(params: IProductResponse) {
    super(params);
    this.type = params.type || '';
    this.color = params.color || '';
    this.monitorSize = params.monitorSize || 0;
    this.monitorResolution = params.monitorResolution || '';
    this.monitorCoverType = params.monitorCoverType || '';
    this.monitorType = params.monitorType || '';
    this.processor = params.processor || '';
    this.coreAmount = params.coreAmount || 0;
    this.memoryRamType = params.memoryRamType || '';
    this.memoryRamAmount = params.memoryRamAmount || 0;
    this.videoType = params.videoType || '';
    this.videoMemoryAmount = params.videoMemoryAmount || 0;
    this.video = params.video || '';
    this.driveType = params.driveType || '';
    this.driveMemoryAmount = params.driveMemoryAmount || 0;
    this.driveSecondMemoryAmount = params.driveSecondMemoryAmount || 0;
    this.options = params.options || '';
    this.productType = params.productType;
  }
}
