import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {counterReducer} from './counter-home/state/counter.reducer'
import { StoreModule } from '@ngrx/store';
import { CounterButtonsComponent } from './counter-home/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-home/counter-output/counter-output.component';
import { CustomCounterInputComponent } from './counter-home/custom-counter-input/custom-counter-input.component'
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CounterHomeComponent } from './counter-home/counter-home.component';
import { ProductsListComponent } from './posts-list/products-list.component';
@NgModule({
  declarations: [AppComponent, CounterButtonsComponent, CounterOutputComponent, CustomCounterInputComponent, HeaderComponent, HomeComponent, CounterHomeComponent, ProductsListComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({counter: counterReducer}),
    AppRoutingModule,
    FormsModule,
    StoreDevtoolsModule.instrument({
      logOnly: true
    })
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
