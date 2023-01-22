import { ProductsListComponent } from './products-list/products-list.component';
import { CounterHomeComponent } from './counter-home/counter-home.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'counter', component:CounterHomeComponent },
  {path:'productsList', component:ProductsListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
