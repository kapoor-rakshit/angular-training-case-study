import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-parent',
  templateUrl: './timer-parent.component.html',
  styleUrls: ['./timer-parent.component.css']
})
export class TimerParentComponent implements OnInit {

  timerValue: any = 0;
  timerStatus: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  receivedTimerStat(status: any) {
    this.timerStatus = status;
  }

  receivedTimerVal(value: any) {
    this.timerValue = value;
  }

}
