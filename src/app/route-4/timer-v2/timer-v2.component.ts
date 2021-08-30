import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerV2Service } from '../timer-v2.service';

@Component({
  selector: 'app-timer-v2',
  templateUrl: './timer-v2.component.html',
  styleUrls: ['./timer-v2.component.css']
})
export class TimerV2Component implements OnInit, OnDestroy {

  timerVal: number = 0;
  timerValSub!: Subscription;

  constructor(private timerService: TimerV2Service) { }

  ngOnInit(): void {
    this.timerValSub = this.timerService.timerValue.subscribe((count: number)=> {
                          this.timerVal = count;
                        },
                        (err: Error)=> {
                          console.log(`ERROR in receving time value ==> ${err.message}`);
                      });
  }

  ngOnDestroy() {
    this.timerValSub.unsubscribe();
  }

}
