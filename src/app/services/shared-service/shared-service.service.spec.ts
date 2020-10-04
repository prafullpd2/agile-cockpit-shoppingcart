import { TestBed } from '@angular/core/testing';
import { SharedService } from './shared-service.service';

const mockJsonItem = {
  name: 'Bed',
  price: 'Rs. 17,459.00',
  category: 'Furnishing',
  rating: 4,
  quantity: 1,
  thumbnail: '../assets/images/bedsheets.jpeg'
};

describe('SharedServiceService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test method itemsCount()', () => {
    expect(service.itemsCount()).toEqual(0);
  });

  it('should test method addItem()', () => {
    service.items.length = 0;
    service.addItem(mockJsonItem);
    expect(service.itemsCount()).toEqual(1);
    service.addItem(mockJsonItem);
    expect(service.itemsCount()).toEqual(2);
  });
});
