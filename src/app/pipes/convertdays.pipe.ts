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
  name: 'convertDays'
})
export class ConvertDaysPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
        let days = '';
        for (let key in value) {
            if (value[key]) days += ' '+<string>key.charAt(0).toUpperCase()+<string>key.slice(1).toLowerCase(); 
        }

        return days;
  }
}