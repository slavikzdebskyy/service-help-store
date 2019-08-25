import { IImage, IProduct } from '@service-help/interfaces';

export interface ILaptop extends IProduct {
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
}
