import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/Shared/Models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food !: Food
  constructor(activeRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router){
    activeRoute.params.subscribe((data)=>{
      if(data.id){
        this.food =  foodService.getFoodById(data.id)
      }
    })
  }
  addToCart(){
    this.cartService.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }
}