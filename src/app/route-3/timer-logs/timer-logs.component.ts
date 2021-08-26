import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer-logs',
  templateUrl: './timer-logs.component.html',
  styleUrls: ['./timer-logs.component.css']
})
export class TimerLogsComponent implements OnInit, OnChanges {

  @Input("timerStatus") status: string = ""; 
  logs: string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    
    console.log(`INSIDE ngOnChanges logs component`);

    for(let prop in changes) {
      if(prop.toLowerCase() == "status") {
        let chng = changes[prop];               
        let cur  = chng.currentValue;              

        if(cur.toLowerCase() == "start") {
          this.logs.push(`Started at ${new Date().toLocaleString()}`);
        }
        else if(cur.toLowerCase() == "pause") {
          this.logs.push(`Paused at ${new Date().toLocaleString()}`);
        }
        else if(cur.toLowerCase() == "reset") {
          this.logs.push(`Reset at ${new Date().toLocaleString()}`);
        }

        let logDiv = document.querySelector(".logInfo");
        (logDiv as HTMLDivElement).scrollTop = logDiv?.scrollHeight || Infinity;
      }
    }
  }

  ngOnInit(): void {
  }

}
