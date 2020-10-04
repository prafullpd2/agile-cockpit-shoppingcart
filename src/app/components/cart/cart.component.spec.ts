import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedService } from '../../services/shared-service/shared-service.service';
import { CartComponent } from './cart.component';

const mockJsonItem = {
  name: 'Bed',
  price: 'Rs. 17,459.00',
  category: 'Furnishing',
  rating: 4,
  quantity: 1,
  thumbnail: '../assets/images/bedsheets.jpeg'
};

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let service: SharedService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [SharedService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SharedService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test removeFromCart() method', () => {
    service.addItem(mockJsonItem);
    expect(service.itemsCount()).toBe(1);
    component.removeFromCart(mockJsonItem);
    expect(service.itemsCount()).toBe(0);
  });


});
