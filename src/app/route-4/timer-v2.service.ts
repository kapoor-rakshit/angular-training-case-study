import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerV2Service {

  // timerValue: EventEmitter<any> = new EventEmitter<any>();
  // timerStatus: EventEmitter<any> = new EventEmitter<any>();

  timerValue: Subject<any> = new Subject<any>();
  timerStatus: Subject<any> = new Subject<any>();

  constructor() { }
}
