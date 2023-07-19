/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CartService } from './cart.service';

describe('Service: Cart', () => {
  let service: CartService;
  //* Mock product
  const product = {
    id: 1,
    title: 'Testing product',
    price: 10.0,
    description: 'Description Product',
    category: 'Category',
    image: 'http://example.com',
    rating: {
      rate: 5,
      count: 100
    }
  };

  beforeEach(() => {
    //* Mock LocalStorage
    let store: any = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
    };

    //* Replace LocalStorage with mocked store
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);

    //* Service
    TestBed.configureTestingModule({
      providers: [CartService]
    });

    service = TestBed.inject(CartService);
  });

  describe('create service', () => {
    it('should create the service', inject([CartService], (service: CartService) => {
      expect(service).toBeTruthy();
    }));
  });

  describe('getCart', () => {
    it('should get items from cart', () => {
      expect(service.getCart().length).toEqual(0);
    });
  });

  describe('saveProduct', () => {
    it('should save item to cart', () => {
      service.saveProduct(product);
      expect(service.getCart().length).toEqual(1);
    });
  });

  describe('deleteProduct', () => {
    it('should delete item', () => {
      service.saveProduct(product);
      expect(service.getCart().length).toEqual(1);
      service.deleteProduct(product);
      expect(service.getCart().length).toEqual(0);
    });
  });
});
