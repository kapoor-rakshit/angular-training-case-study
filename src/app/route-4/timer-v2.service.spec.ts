import { TestBed } from '@angular/core/testing';

import { TimerV2Service } from './timer-v2.service';

describe('TimerV2Service', () => {
  let service: TimerV2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerV2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
