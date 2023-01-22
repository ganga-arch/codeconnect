import { changeName, customIncrement } from '../state/counter.actions';
import { Store } from '@ngrx/store';
import { ICounterState } from '../state/counter.state';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  value:any;
  name:any;
  constructor(private store:Store<{counter:ICounterState}>){

  }

  ngOnInit():void {

  }

  addValue():void {
    this.store.dispatch(customIncrement({value: +this.value}))
  }

  changeName(): void {
    this.store.dispatch(changeName({value:this.name}))
  }

}
