import { IProduct } from '@service-help/interfaces';

export interface IMonitor extends IProduct {
  monitorType: string;
  monitorResolution: string;
  monitorSize: number;
  contrast?: number;
  brightness?: number;
  light: string;
  connectors: string;
  options: string;
}
