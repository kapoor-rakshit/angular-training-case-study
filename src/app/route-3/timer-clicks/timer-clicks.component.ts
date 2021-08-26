import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer-clicks',
  templateUrl: './timer-clicks.component.html',
  styleUrls: ['./timer-clicks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerClicksComponent implements OnInit, OnChanges {

  startClicks: number = 0;
  pauseClicks: number = 0;
  resetClicks: number = 0;
  @Input("timerStatus") status: string = ""; 

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    console.log(`INSIDE ngOnChanges click component`);

    for(let prop in changes) {
      if(prop.toLowerCase() == "status") {
        let chng = changes[prop];               
        let cur  = chng.currentValue;              

        if(cur.toLowerCase() == "start") {
          this.startClicks+=1;
        }
        else if(cur.toLowerCase() == "pause") {
          this.pauseClicks+=1;
        }
        else if(cur.toLowerCase() == "reset") {
          this.resetClicks+=1;
        }
      }
    }
  }

  ngOnInit(): void {
  }

}
