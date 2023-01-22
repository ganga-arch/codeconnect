import { Store } from '@ngrx/store';

import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { posts } from './state/products.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  posts: Observable<posts[]>;
  count: Observable<number>;
  constructor(public store: Store<any>) {}

  ngOnInit(): void {

  }
}
