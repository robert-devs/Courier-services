import { Pipe, PipeTransform } from '@angular/core';
import { Iuser } from '../Interfaces/interfaces';

@Pipe({
  name: 'filter',
})
export class filterPipe implements PipeTransform {
  transform(value: Iuser[], filteredText: string): Iuser[] {
    if (value.length == 0 || filteredText == '') {
      return value;
    }
    const filtered: Iuser[] = [];
    for (let item of value) {
      if (
        item.name
          .toLocaleLowerCase()
          .indexOf(filteredText.toLocaleLowerCase()) !== -1
      ) {
        filtered.push(item);
      }
    }
    return filtered;
  }
}
