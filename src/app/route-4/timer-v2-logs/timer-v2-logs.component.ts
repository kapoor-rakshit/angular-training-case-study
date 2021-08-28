import { Component, OnInit } from '@angular/core';
import { TimerV2Service } from '../timer-v2.service';

@Component({
  selector: 'app-timer-v2-logs',
  templateUrl: './timer-v2-logs.component.html',
  styleUrls: ['./timer-v2-logs.component.css']
})
export class TimerV2LogsComponent implements OnInit {

  logs: any[] = [];

  constructor(private timerService: TimerV2Service) { }

  ngOnInit(): void {
    this.timerService.timerStatus.subscribe((status: string)=> {

      let logDiv = document.querySelector(".logInfo");
      (logDiv as HTMLDivElement).scrollTop = logDiv ? logDiv.clientHeight : Infinity;

      if(status.toLowerCase() == "start") {
        this.logs.push(`Started at ${new Date().toLocaleString()}`);
      }
      else if(status.toLowerCase() == "pause") {
        this.logs.push(`Paused at ${new Date().toLocaleString()}`);
      }
      else if(status.toLowerCase() == "reset") {
        this.logs.push(`Reset at ${new Date().toLocaleString()}`);
      }
    },
    (err: Error)=> {
      console.log(`ERROR in receving time status ==> ${err.message}`);
    });
  }

}
