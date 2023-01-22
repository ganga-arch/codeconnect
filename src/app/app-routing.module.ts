import { CounterHomeComponent } from './counter-home/counter-home.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './posts-list/products-list.component';

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
