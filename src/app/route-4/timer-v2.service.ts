import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerV2Service {

  timerValue: EventEmitter<any> = new EventEmitter<any>();
  timerStatus: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
}
