import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICounterState } from './state/counter.state';
import { getName } from './state/counter.selectors';

@Component({
  selector: 'app-counter-home',
  templateUrl: './counter-home.component.html',
  styleUrls: ['./counter-home.component.scss']
})
export class CounterHomeComponent {
  newtitle$: Observable<string>;
  constructor(private store: Store<{counter:ICounterState}>){

  }

  ngOnInit(): void {
    this.newtitle$ = this.store.select(getName);
  }
}
