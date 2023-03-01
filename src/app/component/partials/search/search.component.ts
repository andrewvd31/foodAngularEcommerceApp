import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm = ''
  constructor(activeRoute: ActivatedRoute, private route: Router){
    activeRoute.params.subscribe((data)=>{
      if (data.searchterms){
        this.searchTerm = data.searchterms
      }
    })
  }
  search(term:string):void{
    if(term){
      this.route.navigateByUrl('/search/' + term)
    }
  }
}