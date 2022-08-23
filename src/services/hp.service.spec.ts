/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HpService } from './hp.service';

describe('Service: Hp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HpService]
    });
  });

  it('should ...', inject([HpService], (service: HpService) => {
    expect(service).toBeTruthy();
  }));
});
