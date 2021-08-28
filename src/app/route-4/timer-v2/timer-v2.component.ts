import { Component, OnInit } from '@angular/core';
import { TimerV2Service } from '../timer-v2.service';

@Component({
  selector: 'app-timer-v2',
  templateUrl: './timer-v2.component.html',
  styleUrls: ['./timer-v2.component.css']
})
export class TimerV2Component implements OnInit {

  timerVal: number = 0;

  constructor(private timerService: TimerV2Service) { }

  ngOnInit(): void {
    this.timerService.timerValue.subscribe((count: number)=> {
      this.timerVal = count;
    },
    (err: Error)=> {
      console.log(`ERROR in receving time value ==> ${err.message}`);
    });
  }

}
