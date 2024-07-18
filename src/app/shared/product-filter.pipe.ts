import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText || searchText.length === 0) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((item) => {
      return item.title.toLowerCase().includes(searchText);
    });
  }
}
