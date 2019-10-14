import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {

  public transform(value: number): string {
    if (!value) {
      return '';
    }
    const space: string = ' ';
    if (Number.isInteger(value)) {
      return `$${space}${value}.00`;
    }
    return `$${space}${value.toFixed(2)}`;
  }

}
