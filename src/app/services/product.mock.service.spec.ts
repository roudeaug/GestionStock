import { TestBed } from '@angular/core/testing';

import { ProductMockService } from './product.mock.service';

describe('Product.MockService', () => {
  let service: ProductMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
