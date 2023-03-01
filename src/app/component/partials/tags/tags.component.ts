import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { tags } from 'src/app/Shared/Models/tags';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?: tags[];
  constructor(private foodService: FoodService){
    this.tags = this.foodService.getAllTags()
  }
}