import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerV2Component } from './timer-v2.component';

describe('TimerV2Component', () => {
  let component: TimerV2Component;
  let fixture: ComponentFixture<TimerV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
