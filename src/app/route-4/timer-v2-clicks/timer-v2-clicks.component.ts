import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerV2Service } from '../timer-v2.service';

@Component({
  selector: 'app-timer-v2-clicks',
  templateUrl: './timer-v2-clicks.component.html',
  styleUrls: ['./timer-v2-clicks.component.css']
})
export class TimerV2ClicksComponent implements OnInit, OnDestroy {

  startClicks: number = 0;
  pauseClicks: number = 0;
  resetClicks: number = 0;

  timerStatSub!: Subscription;

  constructor(private timerService: TimerV2Service) { }

  ngOnInit(): void {
    this.timerStatSub = this.timerService.timerStatus.subscribe((stat: string)=> {
      if(stat.toLowerCase() == "start") {
        this.startClicks+=1;
      }
      else if(stat.toLowerCase() == "pause") {
        this.pauseClicks+=1;
      }
      else if(stat.toLowerCase() == "reset") {
        this.resetClicks+=1;
      }
    },
    (err: Error)=> {
      console.log(`ERROR in receving time status ==> ${err.message}`);
    });
  }

  ngOnDestroy() {
    this.timerStatSub.unsubscribe();
  }

}
