import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared-service/shared-service.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  // array containing all cart items
  cartItems = [];

  /**
   * CartComponent constructor function
   * @param sharedService - SharedService to share data among sibling components.
   */
  constructor(private sharedService: SharedService) {
    // getting cartItems from SharedService when the component initiates
    this.cartItems = this.sharedService.getItems();
   }

  /**
   * function to remove item from SharedService's items array and update variable cartItems as well
   * @param item - Item inteface type object
   */
  removeFromCart(item: Item) {
    this.sharedService.removeItem(item);
    this.cartItems = this.sharedService.getItems();
  }

}
