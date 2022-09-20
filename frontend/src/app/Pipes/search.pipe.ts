import { Pipe, PipeTransform } from '@angular/core';
import { Iorders } from '../Interfaces/interfaces';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: Iorders[], filteredText: string): Iorders[] {
    if (value.length == 0 || filteredText == '') {
      return value;
    }
    const searched: Iorders[] = [];
    for (let item of value) {
      if (
        item.Uname.toLocaleLowerCase().indexOf(
          filteredText.toLocaleLowerCase()
        ) !== -1
      ) {
        searched.push(item);
      }
    }
    return searched;
  }
}
