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
      this.timerService.timerStatus.emit("pause");
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

        this.timerService.timerStatus.emit("start");
  
        this.intervalID = setInterval(()=> {
          this.timerService.timerValue.emit(this.tpTimer);
          this.tpTimer-=1;
  
          if(this.tpTimer == -1) {
            this.timerService.timerStatus.emit("finish");
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
    this.timerService.timerStatus.emit("reset");
    this.timerService.timerValue.emit(0);
    this.timerInput = 0;
    clearInterval(this.intervalID);
    this.timerActive = false;
    this.resetClicked = true;
  }

  ngOnDestroy() {
    clearInterval(this.intervalID);
  }

}
