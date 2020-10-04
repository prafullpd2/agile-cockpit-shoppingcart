import { FilterItemsPipe } from './filter-items.pipe';



const mockJsonItemList = [{
  name: 'Bed',
  price: 'Rs. 17,459.00',
  category: 'Furnishing',
  rating: 4,
  quantity: 1,
  thumbnail: '../assets/images/bedsheets.jpeg'
},
{
  name: 'Chocolate',
  price: 'Rs. 109.00',
  category: 'Food',
  rating: 5,
  quantity: 2,
  thumbnail: '../assets/images/cadbuary.jpeg'
}];

describe('FilterItemsPipe', () => {
  const pipe = new FilterItemsPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('test the transform() method items and search text', () => {
    const result = [{
      name: 'Bed',
      price: 'Rs. 17,459.00',
      category: 'Furnishing',
      rating: 4,
      quantity: 1,
      thumbnail: '../assets/images/bedsheets.jpeg'
    }];
    expect(pipe.transform(mockJsonItemList, 'bed')).toEqual(result);
  });

  it('test the transform() method with no items', () => {
    const blankItemsArray = [];
    expect(pipe.transform(null, 'bed')).toEqual(blankItemsArray);
  });
});
