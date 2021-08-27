import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerV2ClicksComponent } from './timer-v2-clicks.component';

describe('TimerV2ClicksComponent', () => {
  let component: TimerV2ClicksComponent;
  let fixture: ComponentFixture<TimerV2ClicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerV2ClicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerV2ClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
