import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: Array<any>, field: string, value: any): Array<any> {
    return array.filter((m: any) => m[field] == value);
  }

}
