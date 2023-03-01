import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../Shared/Models/food';
import { tags } from '../Shared/Models/tags';

@Injectable({
  providedIn: 'root'
})

export class FoodService {
  constructor() {
  }
  getAll():Food[]{
    return sample_foods
  }
  getAllFoods(searchterms: string){
    return this.getAll().filter(data => data.name.toLowerCase().includes(searchterms.toLowerCase()))
  }
  getAllTags():tags[]{
    return sample_tags
  }
  getAllFoodsByTags(tags:string):Food[]{
    return tags === 'All' ?
    this.getAll() :
    this.getAll().filter(data=>data.tags?.includes(tags))
  }
  getFoodById(foodId: string):Food{
    return this.getAll().find((data)=>data.id === foodId) ?? new Food();
  }
}