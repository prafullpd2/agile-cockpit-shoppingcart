import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../services/shared-service/shared-service.service';
import { DisplayPageComponent } from './display-page.component';
import { FilterItemsPipe } from './../../pipes/filter-items/filter-items.pipe';

const mockJsonItem = {
  name: 'Bed',
  price: 'Rs. 17,459.00',
  category: 'Furnishing',
  rating: 4,
  quantity: 1,
  thumbnail: '../assets/images/bedsheets.jpeg'
};

describe('DisplayPageComponent', () => {
  let component: DisplayPageComponent;
  let fixture: ComponentFixture<DisplayPageComponent>;
  let service: SharedService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayPageComponent, FilterItemsPipe],
      imports: [FormsModule],
      providers: [SharedService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SharedService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test method addToCart()', () => {
    component.addToCart(mockJsonItem);
    expect(service.itemsCount()).toEqual(1);
  });
});
