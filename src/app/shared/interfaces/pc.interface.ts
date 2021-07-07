import { IProduct } from '@service-help/interfaces';

export interface IPC extends IProduct {
  type: string;
  color: string;
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
