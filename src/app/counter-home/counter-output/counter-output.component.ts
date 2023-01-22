import { getCounter } from '../state/counter.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICounterState } from '../state/counter.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit{
  customHeader: string = '';
  constructor(private store: Store<{counter:ICounterState}>) {}
  counter$: Observable<number>;
  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
  }
}
