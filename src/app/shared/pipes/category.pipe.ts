import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {

  public transform(value: number): string {
    switch (value) {
      case 1:
        return 'PC';
      case 2:
        return 'LAPTOP';
      case 3:
        return 'MONITOR';
      default:
        return '';
    }
  }
}
