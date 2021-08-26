import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-config',
  templateUrl: './timer-config.component.html',
  styleUrls: ['./timer-config.component.css']
})
export class TimerConfigComponent implements OnInit, OnDestroy {

  timerInput!: number;
  timerActive: boolean = false;
  tpTimer: number = 0;
  intervalID: any;
  resetClicked: boolean = true;
  @Output() timerStatus: EventEmitter<any> = new EventEmitter<any>();
  @Output() timerVal: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  startPauseTimer() {
    if(this.timerActive) {
      this.timerStatus.emit("pause");
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

        this.timerStatus.emit("start");
  
        this.intervalID = setInterval(()=> {
          this.timerVal.emit(this.tpTimer);
          this.tpTimer-=1;
  
          if(this.tpTimer == -1) {
            this.timerStatus.emit("finish");
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
    this.timerStatus.emit("reset");
    this.timerVal.emit(0);
    this.timerInput = 0;
    clearInterval(this.intervalID);
    this.timerActive = false;
    this.resetClicked = true;
  }

  ngOnDestroy() {
    clearInterval(this.intervalID);
  }

}
