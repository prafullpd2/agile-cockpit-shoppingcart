import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // items array containing data added to the cart to be shared among all components
  items = [];

  /**
   * Function to return total quantity of all the items added in the items array
   */
  itemsCount(): number {
    let quantity = 0;
    this.items.forEach(
      element => quantity += element.quantity
    );
    return quantity;
  }

  /**
   * Function to add item to items array and update item's quantity if the item already exists in items array
   * @param data - Item type object
   */
  addItem(data: Item) {
    // checks if the item already exists in items array then update the quantity
    if (this.items.find(element => {
      if (element.name === data.name) {
        element.quantity += 1;
        return true;
      }
    }
    )) {
      this.itemsCount(); // update the count to the header
      return;
    } else { // if the item does not exist in items array then push the 'data' object to items
      this.items.push(data);
      this.itemsCount(); // update the count to the header
    }
  }

  /**
   * Function to remove item from the cart and reset it's quantity to 1
   * @param data - Item type object
   */
  removeItem(data: Item) {
    // setting the quantity to 1 once it is removed from cart
    data.quantity = 1;
    // removing the item from the items array
    this.items = this.items.filter(element => (element.name !== data.name));
    this.itemsCount(); // update the count to the header
  }

  /**
   * Getter of items array
   */
  getItems(): Item[] {
    return this.items;
  }
}
