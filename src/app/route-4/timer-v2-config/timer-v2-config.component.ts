import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimerV2Service } from '../timer-v2.service';

@Component({
  selector: 'app-timer-v2-config',
  templateUrl: './timer-v2-config.component.html',
  styleUrls: ['./timer-v2-config.component.css']
})
export class TimerV2ConfigComponent implements OnInit, OnDestroy {

  resetClicked: boolean = true;
  timerInput!: number;
  timerActive: boolean = false;
  tpTimer: number = 0;
  intervalID: any;

  constructor(private timerService: TimerV2Service) { }

  ngOnInit(): void {
  }

  startPauseTimer() {
    if(this.timerActive) {
      this.timerService.timerStatus.next("pause");
      clearInterval(this.intervalID);
      this.timerActive = false;
    }
    else {
      if(!this.timerInput || this.timerInput <= 0) {
        alert("Timer limit must be greater than 0.");
      } 
      else {
        if(this.resetClicked) {
          this.tpTimer = this.timerInput;
          this.resetClicked = false;
        }

        this.timerService.timerStatus.next("start");
  
        this.intervalID = setInterval(()=> {
          this.timerService.timerValue.next(this.tpTimer);
          this.tpTimer-=1;
  
          if(this.tpTimer == -1) {
            this.timerService.timerStatus.next("finish");
            this.timerInput = 0;
            clearInterval(this.intervalID);
            this.timerActive = false;
            this.resetClicked = true;
          }
        }, 1000);
  
        this.timerActive = true;
      }
    }
  }

  resetTimer() {
    this.timerService.timerStatus.next("reset");
    this.timerService.timerValue.next(0);
    this.timerInput = 0;
    clearInterval(this.intervalID);
    this.timerActive = false;
    this.resetClicked = true;
  }

  ngOnDestroy() {
    clearInterval(this.intervalID);
  }

}
