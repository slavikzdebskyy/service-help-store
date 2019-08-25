import { Product } from './product.model';
import { IPC, IProductResponse } from '@service-help/interfaces';

export class PC extends Product implements IPC {

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

  constructor(public params: IProductResponse) {
    super(params);
    this.type = params.type || '';
    this.color = params.color || '';
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
  }
}
