import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerV2LogsComponent } from './timer-v2-logs.component';

describe('TimerV2LogsComponent', () => {
  let component: TimerV2LogsComponent;
  let fixture: ComponentFixture<TimerV2LogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerV2LogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerV2LogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
