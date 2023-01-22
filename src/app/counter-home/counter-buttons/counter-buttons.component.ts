import { Store } from '@ngrx/store';
import { ICounterState } from '../state/counter.state';
import { Component } from '@angular/core';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent {

  constructor(private store: Store<{counter:ICounterState}>) {

  }
  public increment(): void {
    this.store.dispatch(increment());
  }

  public decrement(): void {
    this.store.dispatch(decrement());
  }

  public reset(): void {
    this.store.dispatch(reset());
  }

}
