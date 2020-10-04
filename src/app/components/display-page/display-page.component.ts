import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import items from '../../../assets/items-mock-data.json';
import { SharedService } from '../../services/shared-service/shared-service.service';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.scss']
})
export class DisplayPageComponent implements OnInit {

  // searchText binded to filter the itemsArray
  searchText = '';

  // itemsArray containing all the values from items-mock-data.json
  itemsArray : Item[]= [];

  /**
   * DisplayPageComponent constructor function
   * @param sharedService - SharedService to share data among sibling components.
   */
  constructor(private sharedService: SharedService) {
  }
  ngOnInit(): void {
    this.itemsArray = items.items;
  }

  /**
   * function to add items to Cart by updating 'items' Array in SharedService
   * @param item - object of Item type
   */
  addToCart(item: Item){
    this.sharedService.addItem(item);
  }
}
