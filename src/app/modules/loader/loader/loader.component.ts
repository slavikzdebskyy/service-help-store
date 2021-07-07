import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LoaderSizeEnum } from '@service-help/modules';

@Component({
  selector: 'sh-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  @Input()
  public size: LoaderSizeEnum;
  @Input()
  public hasBackdrop: boolean;

  constructor() {
    this.size = LoaderSizeEnum.medium;
    this.hasBackdrop = false;
  }
}
