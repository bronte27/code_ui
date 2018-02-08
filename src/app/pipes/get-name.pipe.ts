import { Pipe, PipeTransform } from '@angular/core';
/*
 * Capitalize the first letter of the string
 * Takes a string as a value.
 * Usage:
 *  value | capitalizefirst
 * Example:
 *  // value.name = daniel
 *  {{ value.name | capitalizefirst  }}
 *  fromats to: Daniel
*/
@Pipe({
  name: 'getName'
})
export class GetNamePipe implements PipeTransform {
    transform(value: any, list: any): string {
        return list.find(x => x.id == value).name;
  }
}