import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/Shared/Models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Food[] = []
  constructor(private foodService : FoodService,private activeRoute: ActivatedRoute){
    activeRoute.params.subscribe((data)=>{
      if (data.searchterms){
        this.foods = this.foodService.getAllFoods(data.searchterms)
      }
      else if(data.tags){
        this.foods = this.foodService.getAllFoodsByTags(data.tags)
      }
      else{
        this.foods = foodService.getAll()
      }
    })
  }
}