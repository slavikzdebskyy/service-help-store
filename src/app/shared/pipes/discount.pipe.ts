import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {

  public transform(value: number): string {
    return `-${value}%`;
  }

}
