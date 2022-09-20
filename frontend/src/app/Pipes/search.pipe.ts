import { Pipe, PipeTransform } from '@angular/core';
import { Iparcel } from '../Interfaces/interfaces';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: Iparcel[], filteredText: string): Iparcel[] {
    if (value.length == 0 || filteredText == '') {
      return value;
    }
    const searched: Iparcel[] = [];
    for (let item of value) {
      if (
        item.uname
          .toLocaleLowerCase()
          .indexOf(filteredText.toLocaleLowerCase()) !== -1
      ) {
        searched.push(item);
      }
    }
    return searched;
  }
}
