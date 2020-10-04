import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../../models/item';

@Pipe({
  name: 'filterItems'
})
export class FilterItemsPipe implements PipeTransform {

  /**
   * Function to filter the values from items array having name containing searchText
   * @param items - items aray
   * @param searchText - text to be matched with item's name key
   */
  transform(items: Item[], searchText: string): Item[] {
    // return blank array if there is no value in items array
    if (!items) {
      return [];
    }
    // return complete items array if there is no value in searchText
    if (!searchText) {
      return items;
    }

    // convert the string to lowercase before comparison
    searchText = searchText.toLocaleLowerCase();

    // return the filtered items list
    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }

}
