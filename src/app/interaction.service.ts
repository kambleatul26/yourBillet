import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _eventDataSource = new BehaviorSubject<string>('null');
  eventName$ = this._eventDataSource.asObservable();

  constructor() { }

  sendMessage(message: string) {
    this._eventDataSource.next(message);
  }
}
