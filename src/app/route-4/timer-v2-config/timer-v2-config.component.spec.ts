import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerV2ConfigComponent } from './timer-v2-config.component';

describe('TimerV2ConfigComponent', () => {
  let component: TimerV2ConfigComponent;
  let fixture: ComponentFixture<TimerV2ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerV2ConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerV2ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
