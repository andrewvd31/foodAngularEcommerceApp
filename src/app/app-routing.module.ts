import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './component/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './component/pages/food-page/food-page.component';
import { HomeComponent } from './component/pages/home/home.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'search/:searchterms',component: HomeComponent},
  {path: 'tag/:tags',component: HomeComponent},
  {path: 'food/:id',component: FoodPageComponent},
  {path: 'cart-page',component: CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }