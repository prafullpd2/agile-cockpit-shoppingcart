import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { async } from '@angular/core/testing';
import { SharedService } from '../../services/shared-service/shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {

  // cartCount to show the number of items added to the cart
  cartCount = 0;

  /**
   * HeaderComponent constructor function
   * @param sharedService - SharedService to share data among sibling components.
   */
  constructor(private sharedService: SharedService) {}

  // Lifecycle Hook - ngDoCheck
  ngDoCheck(): void {
    this.cartCount = this.sharedService.itemsCount();
  }

}
