
import { Product } from './product.model';
import { IProductResponse } from '@service-help/interfaces';

export class Monitor extends Product {

  monitorType: string;
  monitorResolution: string;
  monitorSize: number;
  contrast?: number;
  brightness?: number;
  light: string;
  connectors: string;
  options: string;

  constructor(public params: IProductResponse) {
    super(params);
    this.monitorType = params.monitorType || '';
    this.monitorResolution = params.monitorResolution || '';
    this.monitorSize = params.monitorSize || 0;
    this.light = params.light || '';
    this.connectors = params.connectors || '';
    this.options = params.options || '';
    if (params.contrast) {
      this.contrast = params.contrast;
    }
    if (params.brightness) {
      this.brightness = params.brightness;
    }
  }
}
